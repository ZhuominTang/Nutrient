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
        if(userService.checkUser(user))return new ResponseEntity<>("{\"message\": \"Username or Email has been used\"}", HttpStatus.BAD_REQUEST);
        int selective = userService.insertUser(user);     
        return selective == 1?new ResponseEntity<>("{\"message\": \"Success\"}", HttpStatus.CREATED)
         : new ResponseEntity<>("{\"message\": \"Fail\"}", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        String message = userService.checkUserAndPassword(user);
        if(message.equals("Success"))return new ResponseEntity<>("{\"message\": \"Success\"}", HttpStatus.CREATED);
        else return new ResponseEntity<>("{\"message\": \"" + message+ "\"}", HttpStatus.BAD_REQUEST);
     
    }
    
}
