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

import java.util.ArrayList;
import java.util.List;

/**
 * @author sharoon
 *
 */
public class StatementGroup extends Statement {

	/**
	 * List of Statement objects in the Query. Maps to List<Statement> on the server.
	 */
	private List<Statement> statements;
	
	private JoinOperator joinOperator;
	
	/**
	 * Enum to specify operator to join with the inner statement.
	 *
	 */
	public enum JoinOperator {
		AND, OR
	}
	
	/**
	 * @return the statements
	 */
	public List<Statement> getStatements() {
		return statements;
	}

	/**
	 * @param statements the statements to set
	 */
	public void setStatements(List<Statement> statements) {
		this.statements = statements;
	}
	
	/**
	 * @return the joinOperator
	 */
	public JoinOperator getJoinOperator() {
		return joinOperator;
	}

	/**
	 * @param joinOperator the joinOperator to set
	 */
	public void setJoinOperator(JoinOperator joinOperator) {
		this.joinOperator = joinOperator;
	}

	public void addStatement(Statement statement) {
		if (statements == null) {
			statements = new ArrayList<Statement>();
		}
		statements.add(statement);
	}
}
