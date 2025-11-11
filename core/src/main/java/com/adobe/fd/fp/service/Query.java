/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2016 Adobe Systems Incorporated
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

package com.adobe.fd.fp.service;


/**
 * Querying framework for instance retrieval
 * @author sharoon
 *
 */
public class Query {

	/**
	 * Statement associated with the query
	 */
	StatementGroup statementGroup = new StatementGroup();
	/**
	 * Attributes names to be fetched for each instances separated by comma(,).
	 */
	String cutPoints;
	
	/**
	 * Offset in to the query result. Defaults to Zero
	 */
	int offset = 0;
	
	/**
	 * Limit of instances to be fetched.
	 */
	int limit = -1;

	/**
	 * @return the statementGroup
	 */
	public StatementGroup getStatementGroup() {
		return statementGroup;
	}

	/**
	 * @param statementGroup the statementGroup to set
	 */
	public void setStatementGroup(StatementGroup statementGroup) {
		this.statementGroup = statementGroup;
	}

	/**
	 * @return the cutPoints
	 */
	public String getCutPoints() {
		return cutPoints;
	}

	/**
	 * @param cutPoints the cutPoints to set
	 */
	public void setCutPoints(String cutPoints) {
		this.cutPoints = cutPoints;
	}

	/**
	 * @return the offset
	 */
	public int getOffset() {
		return offset;
	}

	/**
	 * @param offset the offset to set
	 */
	public void setOffset(int offset) {
		this.offset = offset;
	}

	/**
	 * @return the limit
	 */
	public int getLimit() {
		return limit;
	}

	/**
	 * @param limit the limit to set
	 */
	public void setLimit(int limit) {
		this.limit = limit;
	}
	
	
}
