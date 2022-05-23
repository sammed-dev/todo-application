package com.datagrokr.todoapp.controller;

import java.net.UnknownHostException;
import java.util.List;
import java.util.UUID;

import org.bson.Document;

import com.datagrokr.todoapp.model.Helper;
import com.datagrokr.todoapp.model.Todo;
import com.datagrokr.todoapp.services.TodoService;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/todo")
public class TodoController {

	TodoService todoService;
	
	@GET
	@Path("/welcome")
	@Produces(MediaType.TEXT_PLAIN)
	public String displayMessage() throws UnknownHostException {
		todoService = new TodoService();
		return "todo controller";
	}
	
	@POST
	@Path("/add")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response addTodo(Todo todo) {
		todoService = new TodoService();
		Todo addedTodo = todoService.addTodo(todo);
		return Response.status(201).entity(addedTodo).build();
	}
	
	
	@GET
	@Path("/all/{userId}")
	public Response findAll(@PathParam("userId") String id ) {
		todoService = new TodoService();
		List<Todo> todos = todoService.allTodos(id);
		
		return Response.status(200).entity(todos).build();
	}

	@DELETE
	@Path("/delete/{todoId}")
	public Response deleteTodo(@PathParam("todoId") String todoid) {
		todoService = new TodoService();
		todoService.deleteTodo(todoid);
		return Response.status(200).entity(new Helper(todoid,"deleted")).build();
	}
}
