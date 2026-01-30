package com.csuf.cloud.core.utils;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.StringReader;
import java.io.StringWriter;
import java.util.Arrays;

import javax.xml.XMLConstants;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Result;
import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.TransformerFactoryConfigurationError;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

public class XMLUtils {

	private static final Logger log = LoggerFactory.getLogger(XMLUtils.class);

	private XMLUtils() {
	}

	public static Document getDomDocument(InputStream is)
			throws SAXException, IOException, ParserConfigurationException {
		DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
		DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
		Document doc = dBuilder.parse(is);
		doc.getDocumentElement().normalize();
		return doc;
	}
	
	public static Document getDomDocumentNew(InputStream is)
	        throws SAXException, IOException, ParserConfigurationException {
	    if (is == null) {
	        throw new IllegalArgumentException("InputStream is null");
	    }
	    byte[] xmlBytes = IOUtils.toByteArray(is);
	    if (xmlBytes.length == 0) {
	        throw new IOException("InputStream is empty");
	    }
	    try (ByteArrayInputStream bais = new ByteArrayInputStream(xmlBytes)) {
	        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
	        dbFactory.setNamespaceAware(true);
	        DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
	        Document doc = dBuilder.parse(bais);
	        doc.getDocumentElement().normalize();
	        return doc;
	    }
	}

	public static Document getDomDocument1(InputStream is)
			throws SAXException, IOException, ParserConfigurationException, XMLStreamException {

		XMLInputFactory factory = XMLInputFactory.newInstance();

		// disable resolving of external DTD entities
		factory.setProperty(XMLInputFactory.IS_SUPPORTING_EXTERNAL_ENTITIES, Boolean.FALSE);

		// or disallow DTDs entirely
		factory.setProperty(XMLInputFactory.SUPPORT_DTD, Boolean.FALSE);
		XMLStreamReader xmlStreamReader = factory.createXMLStreamReader(is);

		DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
		DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
		Document doc = dBuilder.parse(is);
		doc.getDocumentElement().normalize();
		return doc;
	}

	public static String convertXMLToString(Document xml) {
		try {
			log.debug("entered ServiceUtil convertXMLToString method");
			TransformerFactory factory = TransformerFactory.newInstance();
			factory.setAttribute(XMLConstants.ACCESS_EXTERNAL_DTD, "");
			factory.setAttribute(XMLConstants.ACCESS_EXTERNAL_STYLESHEET, "");
			Transformer transformer = factory.newTransformer();
			transformer.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
			transformer.setOutputProperty(OutputKeys.INDENT, "yes");
			StreamResult result = new StreamResult(new StringWriter());

			DOMSource source = new DOMSource(xml);
			transformer.transform(source, result);
			log.debug("exit ServiceUtil convertXMLToString method");
			return result.getWriter().toString();

		} catch (Exception ex) {
			log.error("Error:: convertXMLToString method: ".concat(ex.getMessage()));
		}
		return null;
	}

	public static InputStream getInputStreamFromXMLDocument(org.w3c.dom.Document doc)
			throws TransformerException, TransformerFactoryConfigurationError {
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
		Source xmlSource = new DOMSource(doc);
		Result outputTarget = new StreamResult(outputStream);
		TransformerFactory.newInstance().setAttribute(XMLConstants.ACCESS_EXTERNAL_DTD, "");
		TransformerFactory.newInstance().setAttribute(XMLConstants.ACCESS_EXTERNAL_STYLESHEET, "");
		TransformerFactory.newInstance().newTransformer().transform(xmlSource, outputTarget);
		InputStream is = new ByteArrayInputStream(outputStream.toByteArray());
		return is;
	}

	public static Element createXMLRootElement(Document doc, String XMLRootElementText) {
		Element root = doc.createElement(XMLRootElementText);
		doc.appendChild(root);
		return root;
	}

	public static Element createXMLParentElement(Document doc, Element XMLRoot, String XMLParentElementText) {
		Element parent = doc.createElement(XMLParentElementText);
		XMLRoot.appendChild(parent);
		return parent;
	}

	public static void createXMLChildElement(Document doc, Element parent, String XMLChildElementText,
			String XMLChildElementValue) {
		Element child = doc.createElement(XMLChildElementText);
		child.insertBefore(doc.createTextNode(XMLChildElementValue), child.getLastChild());
		parent.appendChild(child);
	}

	public static Element getParentNode(Document doc, String elementName) {
		NodeList nList = doc.getElementsByTagName(elementName);
		for (int temp = 0; temp < nList.getLength(); temp++) {
			Node nNode = nList.item(temp);
			if (null != nNode && nNode.getNodeType() == Node.ELEMENT_NODE)
				return (Element) nNode;
		}
		return null;
	}

	public static String getChildNodeContent(Element element, String elementName) {
		if (null != element) {
			NodeList nodeList = element.getElementsByTagName(elementName);
			if (null != nodeList && nodeList.getLength() > 0) {
				Node node = nodeList.item(0);
				if (null != node) {
					return node.getTextContent();
				}
			}
		}
		return StringUtils.EMPTY;
	}

	public static Element getChildNode(Element element, String elementName) {
		if (null != element) {
			NodeList nodeList = element.getElementsByTagName(elementName);
			if (null != nodeList && nodeList.getLength() > 0) {
				Node node = nodeList.item(0);
				if (null != node && node.getNodeType() == Node.ELEMENT_NODE)
					return (Element) node;
			}
		}
		return null;
	}

	public static void removeXMLNodeChildren(Node node) {
		while (node.hasChildNodes())
			node.removeChild(node.getFirstChild());
	}

	public static void removeRecursively(Node node, short nodeType, String name) {
		if (node.getNodeType() == nodeType && (name == null || node.getNodeName().equals(name))) {
			if (!node.getChildNodes().item(1).getTextContent().equalsIgnoreCase("1")) {
				node.getParentNode().removeChild(node);
			}
		} else {
			NodeList list = node.getChildNodes();
			for (int i = 0; i < list.getLength(); i++) {
				removeRecursively(list.item(i), nodeType, name);
			}
		}
	}

	public static final void prettyPrint(Document xml, PrintWriter out) throws Exception {
		Transformer tf = TransformerFactory.newInstance().newTransformer();
		tf.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
		tf.setOutputProperty(OutputKeys.INDENT, "yes");
		tf.transform(new DOMSource(xml), new StreamResult(out));
		out.println(out.toString());
	}

	public static final String prettyPrintAsString(Document xml) throws Exception {
		StringWriter writer = new StringWriter();
		Transformer tf = TransformerFactory.newInstance().newTransformer();
		tf.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
		tf.setOutputProperty(OutputKeys.INDENT, "yes");
		tf.transform(new DOMSource(xml), new StreamResult(writer));
		return writer.getBuffer().toString();
	}

	public static String prettyXMLFormat(String input, String indent) {
		Source xmlInput = new StreamSource(new StringReader(input));
		StringWriter stringWriter = new StringWriter();
		try {
			TransformerFactory transformerFactory = TransformerFactory.newInstance();
			transformerFactory.setAttribute(XMLConstants.ACCESS_EXTERNAL_DTD, ""); // Compliant
			transformerFactory.setAttribute(XMLConstants.ACCESS_EXTERNAL_STYLESHEET, ""); // Compliant
			Transformer transformer = transformerFactory.newTransformer();
			transformer.setOutputProperty(OutputKeys.INDENT, "yes");
			transformer.setOutputProperty(OutputKeys.DOCTYPE_PUBLIC, "yes");
			transformer.setOutputProperty("{https://xml.apache.org/xslt}indent-amount", indent);
			transformer.transform(xmlInput, new StreamResult(stringWriter));
			return stringWriter.toString().trim();
		} catch (Exception e) {
			log.error("Error Message in prettyFormat method : {} with details as {}", e.getMessage(),
					Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	public static Document parseXmlFile(String in) {
		try {
			DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
			DocumentBuilder db = dbf.newDocumentBuilder();
			InputSource is = new InputSource(new StringReader(in));
			return db.parse(is);
		} catch (ParserConfigurationException e) {
			throw new RuntimeException(e);
		} catch (SAXException e) {
			throw new RuntimeException(e);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static String getExtendedDesc(Document doc) {
		Element afBoundDataElement = XMLUtils.getParentNode(doc, "afBoundData");
		Element afSubmissionInfoElement = XMLUtils.getParentNode(doc, "afSubmissionInfo");

		if (null != afSubmissionInfoElement && afSubmissionInfoElement.hasChildNodes()) {
			if (null != afBoundDataElement && afBoundDataElement.hasChildNodes()) {
				String afPath = XMLUtils.getChildNodeContent(afSubmissionInfoElement, "afPath");
				log.debug("afPath : {}", afPath);
				if (StringUtils.isNotBlank(afPath) && (afPath.contains("mpp-performance-evaluation")
						|| afPath.contains("mpp-employee-self-evaluation"))) {
					log.debug("afPath match found!");
					String mppDescCWID = XMLUtils.getChildNodeContent(afBoundDataElement, "mppDescCWID");
					log.debug("mppDescCWID : {}", mppDescCWID);
					return mppDescCWID;
				} else if (StringUtils.isNotBlank(afPath) && (afPath.contains("student_course_withdrawal")
						|| afPath.contains("student-course-withdrawal-summer-winter-session"))) {
					log.debug("afPath match found!");
					String aftiaTextBox = XMLUtils.getChildNodeContent(afBoundDataElement, "aftiaTextBox");
					log.debug("aftiaTextBox : {}", aftiaTextBox);
					return aftiaTextBox;
				} else if (StringUtils.isNotBlank(afPath) && afPath.contains("grade-change")) {
					log.debug("afPath match found!");
					String AftiaDescription = XMLUtils.getChildNodeContent(afBoundDataElement, "AftiaDescription");
					log.debug("AftiaDescription : {}", AftiaDescription);
					return AftiaDescription;
				} else {
					log.debug("afPath match found!");
					String aftiaDescCWID = XMLUtils.getChildNodeContent(afBoundDataElement, "aftiaDescCWID");
					log.debug("aftiaDescCWID : {}", aftiaDescCWID);
					return aftiaDescCWID;
				}
			}
		}
		return null;
	}

	public static String getWorkflowInitiator(Document doc) {
		Element afUnBoundDataElement = XMLUtils.getParentNode(doc, "afUnboundData");
		if (null != afUnBoundDataElement && afUnBoundDataElement.hasChildNodes()) {
			String workflowInitiator = XMLUtils.getChildNodeContent(afUnBoundDataElement, "workflow_initiator");
			log.debug("workflowInitiator : {}", workflowInitiator);
			return workflowInitiator;
		}
		return null;
	}

	public static InputStream getStreamFromXMLDocument(Document document) {
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
		Source xmlSource = new DOMSource(document);
		Result outputTarget = new StreamResult(outputStream);
		try {
			TransformerFactory.newInstance().newTransformer().transform(xmlSource, outputTarget);
			return new ByteArrayInputStream(outputStream.toByteArray());
		} catch (TransformerException | TransformerFactoryConfigurationError e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	public static Integer getElementLength(Element element, String elementName) {
		if (null != element) {
			NodeList nodeList = element.getElementsByTagName(elementName);
			if (null != nodeList) {
				return nodeList.getLength();
			}
		}
		return null;
	}

	public static String getChildNodeContentOfElement(Element element, String elementName, Integer index) {
		if (null != element) {
			NodeList nodeList = element.getElementsByTagName(elementName);
			if (null != nodeList && nodeList.getLength() > 0) {
				Node node = nodeList.item(index);
				if (null != node) {
					return node.getTextContent();
				}
			}
		}
		return StringUtils.EMPTY;
	}

	public static void removeChildNode(Document d, Element element, String elementName) {
		if (null != element) {
			NodeList nodeList = element.getElementsByTagName(elementName);			
			d.getElementsByTagName(elementName).item(0).getParentNode().removeChild(nodeList.item(0));
		}
	}	
	
	public static void removeNode(Document d, Element element, String elementName) {
		if (null != element) {
			NodeList nodeList = element.getElementsByTagName(elementName);	
			(element.getElementsByTagName(elementName).item(0).getParentNode()).getParentNode().removeChild(nodeList.item(0));
		}
	}	

	public static String getXMLFormElementName(Document doc) {
		Element root = doc.getDocumentElement();
		Element rootChildren = (Element) root.getChildNodes();
		Node firstChild = rootChildren.getFirstChild();

		while (firstChild.getNextSibling() != null) {
			if (firstChild.getNodeName() == "afBoundData") {
				NodeList childNodes = firstChild.getChildNodes();
				return childNodes.item(1).getNodeName();
			}
			firstChild = firstChild.getNextSibling();
		}
		return "node not found";
	}

	/*
	 * public static void main(String[] args) { String combinedName =
	 * "FOLDER_PAYLOAD:Data.xml"; if (StringUtils.isNotBlank(combinedName) &&
	 * combinedName.contains(":")) { String dataXMLName =
	 * combinedName.split(":")[1]; System.out.println(dataXMLName); } }
	 */
}
