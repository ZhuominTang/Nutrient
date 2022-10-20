package com.nutrient.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.nutrient.dao.UserDao;
import com.nutrient.pojo.User;

@Service
public class UserService {



    @Autowired
    private UserDao userDao;

    public boolean checkUser(User user){
        return userDao.checkUser(user);
    }


    public int insertUser(User user){
        return userDao.insertUser(user);
    }
    
}
