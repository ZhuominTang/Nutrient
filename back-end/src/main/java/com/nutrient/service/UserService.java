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

    BCryptPasswordEncoder bcryptPasswordEncoder = new BCryptPasswordEncoder();

    public boolean checkUser(User user){
       return userDao.checkUser(user)!=null?true:false;
    }

    public String checkUserAndPassword(User user){
        User checkUser = userDao.checkUser(user);
        if(checkUser==null)return "User not found";
        else{
            boolean isMatch = bcryptPasswordEncoder.matches(user.getPassword(),checkUser.getPassword());
            if(isMatch){
                return "Success";
            }else{
                return "Wrong password";
         }
        }
    }


    public int insertUser(User user){
        
        String hashPass = bcryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(hashPass);
        return userDao.insertUser(user);
    }
    
}
