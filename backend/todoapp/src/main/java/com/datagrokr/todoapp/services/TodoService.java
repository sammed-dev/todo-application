package com.datagrokr.todoapp.services;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.bson.Document;

import com.datagrokr.todoapp.model.Todo;
import com.google.gson.Gson;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;


public class TodoService {

	MongoClient mongoClient;
	MongoDatabase db;
	MongoCollection<Document> collection;		
	Document addTodo;
	
	public TodoService(){
		mongoClient = MongoClients.create("mongodb+srv://sammed:sammed@cluster0.osygt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
		db = mongoClient.getDatabase("todostore");
	};
	
	public Todo addTodo(Todo todo) {
		collection = db.getCollection("todos");
//		String uuid = UUID.randomUUID().toString();
//		todo.setTodoId(uuid);
		Gson gson = new Gson();
	    String json = gson.toJson(todo);
	    Document doc = Document.parse(json);
		collection.insertOne(doc);
		FindIterable<Document> results = collection.find(new BasicDBObject("todoId", todo.getTodoId()));
		MongoCursor<Document>  cursor = results.iterator();
		String str = "";
		while(cursor.hasNext()) {
			str = cursor.next().toJson();
		}
//		System.out.println(str.charAt(0));
		Todo todo1 = new Gson().fromJson(str, Todo.class);
		System.out.println(todo1.toString());
		return todo1;
	}
	
	public List<Todo> allTodos(String id){
		System.out.println(id);
		collection = db.getCollection("todos");
		FindIterable<Document> results = collection.find(new BasicDBObject("userId", id));
		MongoCursor<Document>  cursor = results.iterator();
		List<Todo> todos = new ArrayList<Todo>();
		while(cursor.hasNext()) {
			Todo todo1 = new Gson().fromJson(cursor.next().toJson(), Todo.class);
			todos.add(todo1);
		}
		return todos;
	}
	
	public Todo deleteTodo (String todoId) {
		collection = db.getCollection("todos");
		collection.deleteOne(Filters.eq("todoId", todoId));
		return null;
	}
	
}
