package com.nutrient.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.*;

@RestController
@RequestMapping("/api/nutrition")
public class NutritionController {


    @GetMapping("/all")
    public ResponseEntity<String> getAllNutrition() {

        return new ResponseEntity<>("{\"message\": \"Success\"}", HttpStatus.CREATED);
               
    }
    
}
