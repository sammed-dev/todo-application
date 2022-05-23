package com.datagrokr.todoapp.services;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.junit.Test;

import com.datagrokr.todoapp.controller.TodoController;
import com.datagrokr.todoapp.model.Todo;

import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.core.Application;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.Response.Status;

public class TodoServiceTest extends JerseyTest {

   @Override
   protected Application configure() {
       return new ResourceConfig(TodoController.class);
   }

   @Test
   public void Welcome(){
       Response response = target("/todo/welcome").request().get();
       assertEquals(Status.OK.getStatusCode(), response.getStatus());
       assertEquals(MediaType.TEXT_PLAIN, response.getHeaderString(HttpHeaders.CONTENT_TYPE));

       String result = response.readEntity(String.class);

       assertEquals("todo controller", result);
   }

   @Test
   public void addTodo(){
       Todo todo = new Todo("1000", "1000", "my todo", false);
       Response response = target("/todo/add").request(MediaType.APPLICATION_JSON).post(Entity.entity(todo, MediaType.APPLICATION_JSON));        
       assertEquals("Http Response should be 201 ", 201, response.getStatus());
   }

   @Test
   public void getAllTodos(){
       Response response = target("/todo/all/id").request().get();
       assertEquals(200, response.getStatus());
       assertNotNull(response.getEntity());
       System.out.println(response.readEntity(String.class));
   }


   @Test
   public void deleteTodo(){
       Response response = target("/todo/delete/id").request().delete();
       assertEquals(200, response.getStatus());
   }
}
