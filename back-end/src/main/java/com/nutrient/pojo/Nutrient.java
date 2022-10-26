package com.nutrient.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Nutrient {
    private int id;

    private String number;

    private String name;

    private int rank;

    private String unitName;

}
