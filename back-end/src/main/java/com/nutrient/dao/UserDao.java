package com.nutrient.dao;
import com.nutrient.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
@Repository
public class UserDao {

    private static final String COLLECTION_NAME = "user";

    @Autowired
    private MongoTemplate mongoTemplate;

    public User checkUser(User user){
        Criteria criteria = new Criteria();
        criteria.orOperator(Criteria.where("username").is(user.getUsername()),
        Criteria.where("email").is(user.getEmail()));
        Query query = new Query(criteria);
        return mongoTemplate.findOne(query, User.class, COLLECTION_NAME);

    }

    public User checkUsernameOrEmail(User user){
        Criteria criteria = new Criteria();
        criteria.orOperator(Criteria.where("username").is(user.getUsername()),
        Criteria.where("email").is(user.getUsername()));
        Query query = new Query(criteria);
        return mongoTemplate.findOne(query, User.class, COLLECTION_NAME);

    }

    public int insertUser(User user){
        if (user.getTimer() == null) {
            user.setTimer(new Date());
        }
        
        try {
            mongoTemplate.insert(user);
            return 1;
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        }
    }
    
}
