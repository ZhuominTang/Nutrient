package com.nutrient.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import com.nutrient.pojo.User;
import com.nutrient.service.UserService;
import java.time.LocalDateTime;


@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @ApiOperation(value = "Register")
    @PostMapping("/register")
    public ResponseEntity<String> addUser(@RequestBody User user) {

        if (user.getTimer() == null) {
            user.setTimer(LocalDateTime.now());
        }
        int selective = userService.insertUser(user);
        return ResponseEntity.ok().body(selective == 1 ? "success" : "fall");
    }
    
}
