package com.nutrient.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import com.nutrient.pojo.User;

@Service
public class UserService {

    @Autowired
    private MongoTemplate mongoTemplate;


    public void insertUser(User user){

            mongoTemplate.insert(user);

    }
    
}
