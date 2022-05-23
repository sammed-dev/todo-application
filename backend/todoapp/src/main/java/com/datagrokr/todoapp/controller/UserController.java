package com.datagrokr.todoapp.controller;

import com.datagrokr.todoapp.model.Helper;
import com.datagrokr.todoapp.model.User;
import com.datagrokr.todoapp.services.UserService;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("user")
public class UserController {

	
	UserService userService;
	
	@POST
	@Path("/register")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response registerUser(User user) {
		userService = new UserService();
		User registeredUser = userService.registerUser(user);
		Helper helper = new Helper(registeredUser.getUserId(), "Resistration successful");
		return Response.status(201).entity(helper).build();
	}
	
	
	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response loginUser(User user) {
		userService = new UserService();
		User loginSuccess = userService.loginUser(user);
		return Response.status(200).entity(loginSuccess).build();
	}
	
}
