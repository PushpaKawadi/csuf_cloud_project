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
 * Class to add a constraint for querying instances
 * @author sharoon
 *
 */
public class Statement {
	/**
	 * the name of the attribute for the LHS of the statement. Must be same as
	 *  the name of the property in the corresponding object type
	 */
	private String attributeName;

	/**
	 * Value for the RHS of the statement
	 */
	private String attributeValue;

	/**
	 * Operator for this statement
	 */
	private Operator operator = Operator.EQUALS;

	/**
	 * Enum to specify statement operator.
	 * 
	 */
	public enum Operator {
		EQUALS, NOT_EQUALS, EXISTS, NOT, LIKE
	}

	
	/**
	 * @return the attributeName
	 */
	public String getAttributeName() {
		return attributeName;
	}

	/**
	 * @param attributeName the attributeName to set
	 */
	public void setAttributeName(String attributeName) {
		this.attributeName = attributeName;
	}

	/**
	 * @return the attributeValue
	 */
	public String getAttributeValue() {
		return attributeValue;
	}

	/**
	 * @param attributeValue the attributeValue to set
	 */
	public void setAttributeValue(String attributeValue) {
		this.attributeValue = attributeValue;
	}

	/**
	 * @return the operator
	 */
	public Operator getOperator() {
		return operator;
	}

	/**
	 * @param operator the operator to set
	 */
	public void setOperator(Operator operator) {
		this.operator = operator;
	}
}
