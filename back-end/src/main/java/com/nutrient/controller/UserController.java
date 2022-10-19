package com.nutrient.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.nutrient.pojo.User;
import com.nutrient.service.UserService;
import org.springframework.http.*;



@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> addUser(@RequestBody User user) {
        int selective = userService.insertUser(user);
      
    //    return new ResponseEntity<>("{\"message\": \"Success\"}", HttpStatus.CREATED);
         return new ResponseEntity<>("{\"message\": \"Fail\"}", HttpStatus.BAD_REQUEST);
    }
    
}
