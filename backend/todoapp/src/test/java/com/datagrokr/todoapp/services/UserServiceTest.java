package com.datagrokr.todoapp.services;

import static org.junit.Assert.assertEquals;

import com.datagrokr.todoapp.controller.UserController;
import com.datagrokr.todoapp.model.User;

import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.junit.Test;

import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.core.Application;
import jakarta.ws.rs.core.Form;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

public class UserServiceTest extends JerseyTest {
   
    @Override
    protected Application configure() {
        return new ResourceConfig(UserController.class);
    }
    
    @Test
    public void testUserRegistration() {
        User user = new User("Test", "registration", "testUser@gmail.com", "1234", "12345");
         Response response = target("/user/register").request(MediaType.APPLICATION_JSON).post(Entity.entity(user, MediaType.APPLICATION_JSON));
         assertEquals(201, response.getStatus());
    }
 
    @Test
    public void testUserLogin(){    
        Form form = new Form();
        form.param("firstName", "sammed");
        form.param("lastName", "sankonatti");
        form.param("email", "sam@gmail.com");
        form.param("password", "Sammed@123");
        form.param("userId", "1234567");
 
 
 
        User user = new User("sammed", "sankonatti", "sam@gmail.com", "1234", "1234567");
 
        Response response = target("/user/login").request(MediaType.APPLICATION_JSON).post(Entity.entity(user, MediaType.APPLICATION_JSON));
        assertEquals(200, response.getStatus());
    }

}
