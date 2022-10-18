package com.nutrient;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;

import com.nutrient.pojo.User;


@SpringBootTest
public class MongoTemplateTest {
    @Autowired
    MongoTemplate mongoTemplate;

    @Test
    public void testCreateCollection(){
        mongoTemplate.insert(new User(1,"0071563","Zhangsan","zhangssan@gmail.com"));
    }
}
