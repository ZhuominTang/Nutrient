package com.nutrient.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.ArrayList;
import java.util.Map;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class NutritionResponse {
    ArrayList<Map<String ,Object>> list;

    long length;
}
