/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2014 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

package com.adobe.fd.fp.config;

import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.Designate;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

@Component(
    service = FormsPortalDraftsandSubmissionConfigService.class,
    immediate = true
)
@Designate(ocd = FormsPortalDraftsandSubmissionConfigService.Config.class)
public class FormsPortalDraftsandSubmissionConfigService {

    private static final String DEFAULT_DRAFT_DATA_SERVICE = "com.adobe.fd.fp.service.impl.DraftDataServiceImpl";
    private static final String DEFAULT_SUBMIT_DATA_SERVICE = "com.adobe.fd.fp.service.impl.SubmitDataServiceImpl";
    private static final String DEFAULT_PENDING_SIGN_DATA_SERVICE = "com.adobe.fd.fpaddon.service.impl.PendingSignDataServiceImpl";
    private static final String DEFAULT_DRAFT_METADATA_SERVICE = "com.adobe.fd.fp.service.impl.DraftMetadataServiceImpl";
    private static final String DEFAULT_SUBMIT_METADATA_SERVICE = "com.adobe.fd.fp.service.impl.SubmitMetadataServiceImpl";
    private static final String DEFAULT_PENDING_SIGN_METADATA_SERVICE = "com.adobe.fd.fpaddon.service.impl.PendingSignMetadataServiceImpl";
    private static final String[] DEFAULT_FP_OUTBOXES = {"outbox"};
    private static final String DEFAULT_FP_ROOT = "/content/forms/fp";

    private String[] fpOutboxes;
    private String draftDataService;
    private String submitDataService;
    private String draftMetadataService;
    private String submitMetadataService;
    private String pendingSignDataService;
    private String pendingSignMetadataService;

    @ObjectClassDefinition(
        name = "Forms Portal Draft and Submission Configuration",
        description = "Configuration for Forms Portal Draft, Submit, and Pending Sign Services"
    )
    public @interface Config {

        @AttributeDefinition(
            name = "Outboxes for Reverse Replication",
            description = "Configure outboxes for Forms Portal Draft Save and Submit Options"
        )
        String[] portal_outboxes() default {"outbox"};

        @AttributeDefinition(
            name = "Forms Portal Draft Data Service",
            description = "Identifier for draft data service"
        )
        String draft_data_service() default DEFAULT_DRAFT_DATA_SERVICE;

        @AttributeDefinition(
            name = "Forms Portal Draft Metadata Service",
            description = "Identifier for draft metadata service"
        )
        String draft_metadata_service() default DEFAULT_DRAFT_METADATA_SERVICE;

        @AttributeDefinition(
            name = "Forms Portal Submit Data Service",
            description = "Identifier for submit data service"
        )
        String submit_data_service() default DEFAULT_SUBMIT_DATA_SERVICE;

        @AttributeDefinition(
            name = "Forms Portal Submit Metadata Service",
            description = "Identifier for submit metadata service"
        )
        String submit_metadata_service() default DEFAULT_SUBMIT_METADATA_SERVICE;

        @AttributeDefinition(
            name = "Forms Portal Pending Sign Data Service",
            description = "Identifier for pending sign data service"
        )
        String pendingSign_data_service() default DEFAULT_PENDING_SIGN_DATA_SERVICE;

        @AttributeDefinition(
            name = "Forms Portal Pending Sign Metadata Service",
            description = "Identifier for pending sign metadata service"
        )
        String pendingSign_metadata_service() default DEFAULT_PENDING_SIGN_METADATA_SERVICE;
    }

    @Activate
    protected void activate(Config config) {
        this.fpOutboxes = config.portal_outboxes();
        this.draftDataService = config.draft_data_service();
        this.draftMetadataService = config.draft_metadata_service();
        this.submitDataService = config.submit_data_service();
        this.submitMetadataService = config.submit_metadata_service();
        this.pendingSignDataService = config.pendingSign_data_service();
        this.pendingSignMetadataService = config.pendingSign_metadata_service();
    }

    public String getDraftDataService() {
        return draftDataService;
    }

    public String getSubmitDataService() {
        return submitDataService;
    }

    public String getDraftMetadataService() {
        return draftMetadataService;
    }

    public String getSubmitMetadataService() {
        return submitMetadataService;
    }

    public String getFormsPortalRoot() {
        return DEFAULT_FP_ROOT;
    }

    public String[] getFormsPortalOutboxes() {
        return fpOutboxes;
    }

    public String getPendingSignDataService() {
        return pendingSignDataService;
    }

    public String getPendingSignMetadataService() {
        return pendingSignMetadataService;
    }
}
