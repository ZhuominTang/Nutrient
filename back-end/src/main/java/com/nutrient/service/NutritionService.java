package com.nutrient.service;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nutrient.dao.NutritionDao;

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
}
