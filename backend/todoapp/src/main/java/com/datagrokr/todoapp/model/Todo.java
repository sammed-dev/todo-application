package com.datagrokr.todoapp.model;

public class Todo {
	
	private String userId;
	private String todoId;
    private String content;
    private Boolean completed = Boolean.FALSE;
    
    
    public Todo() {
		super();
	}

    public Todo(String userId, String todoId, String content, Boolean completed) {
		super();
		this.userId = userId;
		this.todoId = todoId;
		this.content = content;
		this.completed = completed;
	}

	public String getTodoId() {
		return todoId;
	}

	public void setTodoId(String todoId) {
		this.todoId = todoId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}


	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Boolean getCompleted() {
		return completed;
	}

	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}

	@Override
	public String toString() {
		return "Todo [userId=" + userId + ", todoId=" + todoId + ", content=" + content + ", completed=" + completed
				+ "]";
	}

	
}
