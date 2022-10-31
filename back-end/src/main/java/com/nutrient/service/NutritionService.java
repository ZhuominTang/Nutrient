package com.nutrient.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nutrient.dao.NutritionDao;
import com.nutrient.pojo.FoodNutrient;
import com.nutrient.pojo.Nutrition;

@Service
public class NutritionService {

    @Autowired
    private NutritionDao nutritionDao;

    public List<Map<String, Object>> findNutrition(String keyword, int pageNo, int pageSize) {
        try {
            return nutritionDao.findNutrition(keyword, pageNo, pageSize);
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }
    
    public List<Nutrition> findRequiredNutrition(List<String> nutrition){
        ArrayList<Nutrition> list = new ArrayList<>();
        for(String nu: nutrition){
           list.add(nutritionDao.checkNutritionByDescription(nu)) ;
        }
        return list;
    }

    public List<FoodNutrient> testNutrition() {
        Nutrition nutrition = nutritionDao.checkNutrition();
        return nutrition.getFoodNutrients();
    }

    public boolean testNutrition2() {
        List<Nutrition> nutrition = nutritionDao.getAllNutrition();
        boolean flag = true;
        int length = nutrition.get(0).getFoodNutrients().size();
        for (int i = 0; i < length; i++) {
            String name = nutrition.get(0).getFoodNutrients().get(i).getNutrient().getName();
            for (int j = 1; j < nutrition.size(); j++) {
                if (!nutrition.get(j).getFoodNutrients().get(i).getNutrient().getName().equals(name)) {
                    flag = false;
                }
            }
        }

        return flag;
    }
}
