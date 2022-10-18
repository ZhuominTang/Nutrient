package com.nutrient;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;


@SpringBootTest
public class MongoTemplateTest {
    @Autowired
    MongoTemplate mongoTemplate;

    @Test
    public void testCreateCollection(){
        System.out.println(mongoTemplate.collectionExists("user"));
    }
}
