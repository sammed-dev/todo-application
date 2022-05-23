package com.datagrokr.todoapp.services;


import org.bson.Document;

import com.datagrokr.todoapp.model.User;
import com.google.gson.Gson;
import com.mongodb.BasicDBObject;
import com.mongodb.DBCursor;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import java.util.UUID;

public class UserService {

	MongoClient mongoClient;
	MongoDatabase db;
	MongoCollection<Document> collection;		
	Document addUser;
	int min = 200;  
	int max = 400;  
	
	public UserService(){
		mongoClient = MongoClients.create("mongodb+srv://sammed:sammed@cluster0.osygt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
		db = mongoClient.getDatabase("userdetails");
	};
	
	public User registerUser(User user) {
		collection = db.getCollection("users");
//		String uuid = UUID.randomUUID().toString();
//		user.setUserId(uuid);
		Gson gson = new Gson();
	    String json = gson.toJson(user);
	    Document doc = Document.parse(json);
		collection.insertOne(doc);
		FindIterable<Document> results = collection.find(new BasicDBObject("userId", user.getUserId() ));
		MongoCursor<Document>  cursor = results.iterator();
		String str = "";
		while(cursor.hasNext()) {
			str = cursor.next().toJson();
		}
		User user1 = new Gson().fromJson(str, User.class);
		return user1;
	}	
	
	public User loginUser(User user) {
		collection = db.getCollection("users");
		FindIterable<Document> results = collection.find(new BasicDBObject("email", user.getEmail() ));
		MongoCursor<Document>  cursor = results.iterator();
		String str = "";
		while(cursor.hasNext()) {
			str = cursor.next().toJson();
		}
		User user1 = new Gson().fromJson(str, User.class);
		return user1;
	}
	
}
