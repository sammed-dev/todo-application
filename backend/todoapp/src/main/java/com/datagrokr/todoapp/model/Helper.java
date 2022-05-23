package com.datagrokr.todoapp.model;

public class Helper {

	private String userId;
	private String message;
	
	
	
	public Helper() {
		super();
	}
	public Helper(String userId, String message) {
		super();
		this.userId = userId;
		this.message = message;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
}
