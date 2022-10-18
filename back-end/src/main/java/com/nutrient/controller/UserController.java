package com.nutrient.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.nutrient.pojo.User;
import com.nutrient.service.UserService;
import java.time.LocalDateTime;


@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> addUser(@RequestBody User user) {
        System.out.print(user);
        int selective = userService.insertUser(user);
        return ResponseEntity.ok().body(selective == 1 ? "success" : "fall");
    }
    
}
