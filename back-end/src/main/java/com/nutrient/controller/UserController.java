package com.nutrient.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.nutrient.model.JwtResponse;
import com.nutrient.pojo.User;
import com.nutrient.service.UserService;
import com.nutrient.util.JwtUtil;

import org.springframework.http.*;



@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService;

    @Autowired
    BCryptPasswordEncoder bcryptPasswordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> addUser(@RequestBody User user) {
        if(userService.checkUser(user))return new ResponseEntity<>("{\"message\": \"Username or Email has been used\"}", HttpStatus.BAD_REQUEST);
        int selective = userService.insertUser(user);     
        return selective == 1?new ResponseEntity<>("{\"message\": \"Success\"}", HttpStatus.CREATED)
         : new ResponseEntity<>("{\"message\": \"Fail\"}", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        User checkUser = userService.checkUserAndPassword(user);
        if(checkUser!=null){
            boolean isMatch = bcryptPasswordEncoder.matches(user.getPassword(),checkUser.getPassword());
            if(isMatch){
                String token = jwtUtil.newToken(user);
                return new ResponseEntity<>("{\"jwt\": \"" + token+ "\",\"username\": \"" + checkUser.getUsername()+ "\"}", HttpStatus.CREATED);
            }else{
                return new ResponseEntity<>("{\"message\": \"Wrong password\"}", HttpStatus.BAD_REQUEST);

            }
        }
        else return new ResponseEntity<>("{\"message\": \"User not found\"}", HttpStatus.BAD_REQUEST);
     
    }

}
