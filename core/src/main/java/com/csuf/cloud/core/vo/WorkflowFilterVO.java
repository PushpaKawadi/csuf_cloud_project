package com.csuf.cloud.core.vo;

public class WorkflowFilterVO {

	public WorkflowFilterVO(String initiator, String modelTitle, String startTime) {
		super();
		this.initiator = initiator;
		this.modelTitle = modelTitle;
		this.startTime = startTime;
	}

	private String initiator;
	private String modelTitle;
	private String startTime;

	public String getInitiator() {
		return initiator;
	}

	public void setInitiator(String initiator) {
		this.initiator = initiator;
	}

	public String getModelTitle() {
		return modelTitle;
	}

	public void setModelTitle(String modelTitle) {
		this.modelTitle = modelTitle;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((initiator == null) ? 0 : initiator.hashCode());
		result = prime * result + ((modelTitle == null) ? 0 : modelTitle.hashCode());
		result = prime * result + ((startTime == null) ? 0 : startTime.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		WorkflowFilterVO other = (WorkflowFilterVO) obj;
		if (initiator == null) {
			if (other.initiator != null)
				return false;
		} else if (!initiator.equals(other.initiator))
			return false;
		if (modelTitle == null) {
			if (other.modelTitle != null)
				return false;
		} else if (!modelTitle.equals(other.modelTitle))
			return false;
		if (startTime == null) {
			if (other.startTime != null)
				return false;
		} else if (!startTime.equals(other.startTime))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "WorkitemFilterVO [initiator=" + initiator + ", modelTitle=" + modelTitle + ", startTime=" + startTime
				+ "]";
	}
}
