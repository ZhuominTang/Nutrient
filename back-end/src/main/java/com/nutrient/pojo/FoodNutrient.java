package com.nutrient.pojo;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FoodNutrient {
    private String type;

    private int id;

    private double amount;

    private ArrayList<Nutrient> nutrient;

}
