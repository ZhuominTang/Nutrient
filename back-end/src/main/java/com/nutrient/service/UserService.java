package com.nutrient.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

import com.nutrient.pojo.User;

@Service
public class UserService {

    @Autowired
    private MongoTemplate mongoTemplate;


    public int insertUser(User user){
        if (user.getTimer() == null) {
            user.setTimer(LocalDateTime.now());
        }
        
        try {
            user.setTimer(LocalDateTime.now());
            mongoTemplate.insert(user);
            return 1;
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        }
    }
    
}
