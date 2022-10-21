package com.nutrient.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import com.nutrient.dao.UserDao;
import com.nutrient.pojo.User;

@Service
public class UserService {



    @Autowired
    private UserDao userDao;

    @Autowired
    BCryptPasswordEncoder bcryptPasswordEncoder;

    public boolean checkUser(User user){
       return userDao.checkUser(user)!=null?true:false;
    }

    public User checkUserAndPassword(User user){
        return  userDao.checkUsernameOrEmail(user);

    }


    public int insertUser(User user){
        
        String hashPass = bcryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(hashPass);
        return userDao.insertUser(user);
    }
    
}
