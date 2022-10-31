package com.nutrient.pojo;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "food")
public class Nutrition {
    @Id
    private String id;

    @Field
    private String description;

    @Field
    private ArrayList<FoodNutrient> foodNutrients;

}
