/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/
package com.adobe.fd.fp.exception;

import java.text.MessageFormat;
import java.util.Arrays;
import java.util.ResourceBundle;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author sharoon
 *
 */
public class FormsPortalException extends Exception {

	/**
	 * Serial Version UID
	 */
	private static final long serialVersionUID = -7363820328483991171L;
	/** Default log. */
	transient private final Logger log = LoggerFactory
			.getLogger(FormsPortalException.class);

	/** Resources for this class. */
	private static final ResourceBundle RESOURCES = ResourceBundle
			.getBundle("errorMessages");

	private String code;

	transient private Object[] messageArgs;

	public FormsPortalException() {
	}

	public FormsPortalException(String code) {
		this.code = code;
	}
	
	public FormsPortalException(String code, Object[] args) {//NOSONAR
		this.code = code;
		this.messageArgs = args;
	}


	public FormsPortalException(Throwable cause) {
		super(cause);
	}

	public FormsPortalException(String code, Throwable cause) {
		super(cause);
		this.code = code;
	}
	
	public FormsPortalException(String code, Throwable cause, Object[] args) {	//NOSONAR
		super(cause);
		this.code = code;
		this.messageArgs = args;
		
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	@Override
	public String getMessage() {
		String message = null;
    	try {
    		if (code == null) {
    			return super.getMessage();
    		}
    		String messageString = RESOURCES.getString(code);
    		if (messageArgs != null) {
                message = fastFormat(messageString, messageArgs);
    		} else {
    			message = messageString;
    		}
    	} catch (Exception e) {
    		log.error("Exception caught in fetching error message ", e);
    	}
    	return code + (message == null?"": ": " +message);
	}

	public Object[] getMessageArgs() {
		return messageArgs;
	}

	public void setMessageArgs(Object[] messageArgs) {
		if (messageArgs != null) {
			this.messageArgs = Arrays.copyOf(messageArgs, messageArgs.length);
		}
	}
	
	/**
     * Fast message formatter.
     * <p>
     * MessageFormat first compiles the message into a state machine, and then applies it. That's faster if you use
     * the message format over and over, but calling the static method MessageFormat.format constructs a
     * MessageFormat, uses it once and then throws it away. That's really expensive.
     * <p>
     * This routine is almost 10 times faster that MessageFormat.format for simple "{n}"-style arguments which are
     * typical. For the more complicated cases, it just delegates to MessageFormat.format.
     * @param msg the message
     * @param args the arguments
     * @return string result
     */
    protected String fastFormat(final String msg, final Object[] args) {
        try {
            if ((args == null) || (args.length == 0)) {
                // There is no work to perform, so just return the original
                // message.
                return msg;
            }

            StringBuffer res = new StringBuffer();
            int pos = 0;
            int cursor = 0;
            int len = msg.length();

            while (cursor < len) {
                char c = msg.charAt(cursor++);

                if (c == '{') {
                    // deal with {nnn} substitutions
                    int loc = cursor;

                    while ((cursor < len) && (msg.charAt(cursor) != '}')) {
                        cursor++;
                    }

                    if (cursor >= len) {
                        break;
                    }

                    String numStr = msg.substring(loc, cursor++);

                    // if this isn't a number, then we catch a NumberFormatException far below
                    int paramNum = Integer.parseInt(numStr);

                    if (paramNum < args.length) {
                        res.append(msg.substring(pos, loc - 1));

                        if (args[paramNum] == null) {
                            res.append("null");
                        } else {
                            res.append(args[paramNum].toString());
                        }
                        pos = cursor;
                    }
                } else if ((c == '\'') && (cursor < len)) {
                    // deal with quotes
                    res.append(msg.substring(pos, cursor - 1));
                    pos = cursor;
                    c = msg.charAt(cursor++);

                    if (c == '\'') {
                        // '' -> '
                        res.append(c);
                    } else {
                        // 'ab{c' -> ab{c
                        while (cursor < len) {
                            if (msg.charAt(cursor++) == '\'') {
                                if ((cursor >= len) || (msg.charAt(cursor) != '\'')) {
                                    cursor--;
                                    break;
                                }

                                // 'don''t' -> don't
                                res.append(msg.substring(pos, cursor++));
                                pos = cursor;
                            }
                        }
                        res.append(msg.substring(pos, cursor++));
                    }
                    pos = cursor;
                }
            }

            if (pos < len) {
                res.append(msg.substring(pos, len));
            }
            return res.toString();
        } catch (NumberFormatException e) {        	
        	log.debug("Ignore exception", e);
            return MessageFormat.format(msg, args);
        }
    }
}
