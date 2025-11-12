package com.csuf.cloud.core.services.impl;

import java.io.File;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.jcr.Session;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.util.ByteArrayDataSource;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.text.StrLookup;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.mail.Email;
import org.apache.commons.mail.HtmlEmail;
import org.apache.commons.mail.SimpleEmail;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.mail.MailTemplate;
import com.day.cq.mailer.MailService;
import com.day.cq.mailer.MessageGateway;
import com.day.cq.mailer.MessageGatewayService;
import com.csuf.cloud.core.services.AssetService;
import com.csuf.cloud.core.services.EmailService;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.vo.EmailAttachmentVO;
import com.csuf.cloud.core.vo.EmailServiceVO;

/**
 * 
 * A Generic Email service that sends an email to a given list of recipients.
 */
@Component(service = EmailService.class, immediate = true, property = {
		Constants.SERVICE_DESCRIPTION + "=Generic Email Service" })
public final class EmailServiceImpl implements EmailService {

	private static final Logger log = LoggerFactory.getLogger(EmailServiceImpl.class);
	private static final int SEND_EMAIL_TIMEOUT = 5000;

	@Reference
	private GlobalConfigService globalConfigService;

	@Reference
	private MessageGatewayService messageGatewayService;

	@Reference
	private MailService mailService;

	@Reference
	private AssetService assetService;

	public List<String> sendEmail(EmailServiceVO emailBean) {

		List<String> failureList = new ArrayList<>();
		if (emailBean.getToAddress() == null || emailBean.getToAddress().isEmpty()) {
			throw new IllegalArgumentException("Invalid Recipients");
		}

		List<InternetAddress> addresses = new ArrayList<>(emailBean.getToAddress().size());
		for (String recipient : emailBean.getToAddress()) {
			try {
				addresses.add(new InternetAddress(recipient));
			} catch (AddressException e) {
				log.warn("Invalid To-email address {} passed to sendEmail(). Skipping.", recipient);
			}
		}

		List<InternetAddress> ccaddresses = new ArrayList<>(emailBean.getCcAddress().size());
		for (String recipient : emailBean.getCcAddress()) {
			try {
				if (StringUtils.isNotBlank(recipient)) {
					ccaddresses.add(new InternetAddress(recipient));
				}
			} catch (AddressException e) {
				log.warn("Invalid cc-email address {} passed to sendEmail(). Skipping.", recipient);
			}
		}

		List<InternetAddress> bccaddresses = new ArrayList<>(emailBean.getBccAddress().size());
		for (String recipient : emailBean.getBccAddress()) {
			try {
				if (StringUtils.isNotBlank(recipient)) {
					bccaddresses.add(new InternetAddress(recipient));
				}
			} catch (AddressException e) {
				log.warn("Invalid bcc-email address {} passed to sendEmail(). Skipping.", recipient);
			}
		}

		if (StringUtils.isBlank(emailBean.getTemplatePath())) {
			throw new IllegalArgumentException("Template path is null or empty");
		}

		HtmlEmail email = getEmail(emailBean);

		email.setSocketConnectionTimeout(SEND_EMAIL_TIMEOUT);
		email.setCharset(emailBean.getCharset());
		email.setStartTLSEnabled(emailBean.isStartTLS());
		email.setStartTLSRequired(emailBean.isStartTLS());

		MessageGateway<HtmlEmail> messageGateway = null;

		if (emailBean.isUseCQGateway())
			messageGateway = messageGatewayService.getGateway(email.getClass());

		InternetAddress[] iAddressRecipients = addresses.toArray(new InternetAddress[addresses.size()]);
		for (InternetAddress address : iAddressRecipients) {
			try {
				email.setTo(Collections.singleton(address));

				if (!ccaddresses.isEmpty()) {
					email.setCc(ccaddresses);
				}
				if (!bccaddresses.isEmpty()) {
					email.setBcc(bccaddresses);
				}
				if (emailBean.isUseCQGateway() && null != messageGateway) {
					messageGateway.send(email);
				} else {
					mailService.send(email);
				}
			} catch (Exception e) {
				failureList.add(address.toString());
				log.error("Exception sending email to " + address, e);
			}
			log.debug("Email sent successfully to address = {}", address.getAddress());
		}

		return failureList;
	}

	private HtmlEmail getEmail(EmailServiceVO emailBean) {
		Session session = null;
		String templatePath = emailBean.getTemplatePath();
		try {
			session = globalConfigService.getAdminSession();
			final MailTemplate mailTemplate = MailTemplate.create(templatePath, session);

			if (mailTemplate == null) {
				log.warn("Email template at {} could not be created.", templatePath);
				return null;
			}

			Class<? extends Email> emailClass = templatePath.endsWith("html") ? HtmlEmail.class : SimpleEmail.class;

			final HtmlEmail email = (HtmlEmail) mailTemplate
					.getEmail(StrLookup.mapLookup(emailBean.getTemplateVariables()), emailClass);

			if (StringUtils.isNotEmpty(emailBean.getFromName()) && StringUtils.isNotEmpty(emailBean.getFromAddress())) {
				email.setFrom(emailBean.getFromAddress(), emailBean.getFromName());
			} else if (StringUtils.isNotEmpty(emailBean.getFromAddress())) {
				email.setFrom(emailBean.getFromAddress());
			}

			if (null != emailBean.getAttachments() && !emailBean.getAttachments().isEmpty()) {
				for (EmailAttachmentVO attachment : emailBean.getAttachments()) {
					if (null != attachment.getBytes()) {
						email.attach(new ByteArrayDataSource(attachment.getBytes(), attachment.getContentType()),
								attachment.getName(), attachment.getDescription());
					}
				}
			}

			if (StringUtils.isNotEmpty(emailBean.getSubject())) {
				email.setSubject(emailBean.getSubject());
			}

			if (emailBean.hasEmbeddedImage()) {
				//File image = CSUFUtils.getFileFromCRXPath(emailBean.getEmbeddedImagePath());
				//InputStream imageStream = assetService.getFileStreamFromCRX(session != null ? session : globalConfigService.getAdminSession(), emailBean.getEmbeddedImagePath());
				//image = CSUFUtils.copyInputStreamToFile(imageStream, image);
				//String cid = email.embed(image, emailBean.getEmbeddedImageDescription());

				InputStream templateStream = assetService.getFileStreamFromCRX(session != null ? session : globalConfigService.getAdminSession(), emailBean.getTemplatePath());
				byte[] encodedTemplate = IOUtils.toByteArray(templateStream);
				String htmlMessage = new String(encodedTemplate, StandardCharsets.UTF_8);
				//htmlMessage = htmlMessage.replace("cid:", "cid:".concat(cid));
				Map<String, String> templateVariables = emailBean.getTemplateVariables();
				for (String tempateVariable : templateVariables.keySet()) {
					htmlMessage = htmlMessage.replaceAll("\\$".concat(tempateVariable),
							templateVariables.get(tempateVariable));
				}
				// set the html message from the template
				email.setHtmlMsg(htmlMessage);
			}
			return email;
		} catch (Exception e) {
			log.error("Unable to construct email from template " + templatePath, e);
		} finally {
			if (session != null && session.isLive()) {
				session.logout();
			}
		}
		return null;
	}
}
