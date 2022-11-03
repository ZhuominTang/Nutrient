package com.nutrient.dao;

import org.springframework.stereotype.Repository;

import com.nutrient.pojo.Nutrition;
import com.nutrient.pojo.NutritionResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.core.TimeValue;
import org.elasticsearch.index.query.MatchQueryBuilder;

import org.elasticsearch.index.query.QueryBuilders;

import org.elasticsearch.search.SearchHit;

import org.elasticsearch.search.builder.SearchSourceBuilder;

import java.io.IOException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;



@Repository
public class NutritionDao {
    @Autowired
    private RestHighLevelClient restHighLevelClient;

    private static final String COLLECTION_NAME = "food";

    @Autowired
    private MongoTemplate mongoTemplate;

    public Nutrition checkNutrition(){
        Criteria criteria = Criteria.where("description").is("Milk, whole");
        Query query = new Query(criteria);
        return mongoTemplate.findOne(query, Nutrition.class, COLLECTION_NAME);

    }

    public Nutrition checkNutritionByDescription(String description){
        Criteria criteria = Criteria.where("description").is(description);
        Query query = new Query(criteria);
        return mongoTemplate.findOne(query, Nutrition.class, COLLECTION_NAME);
    }


    public List<Nutrition> getAllNutrition(){
        Criteria criteria = Criteria.where("description").exists(true);
        Query query = new Query(criteria);
        List<Nutrition> list = mongoTemplate.find(query, Nutrition.class, COLLECTION_NAME);
        return list;
    }

    public NutritionResponse findNutrition(String keyword, int pageNo, int pageSize) throws IOException{

        if(pageNo<0)pageNo=0;
        SearchRequest searchRequest = new SearchRequest("health_test");
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        searchSourceBuilder.from(pageNo);
    
        searchSourceBuilder.size(pageSize);

        MatchQueryBuilder termQueryBuilder = QueryBuilders.matchQuery("description",keyword);
        searchSourceBuilder.query(termQueryBuilder);
        searchSourceBuilder.timeout(new TimeValue(60, TimeUnit.SECONDS));

        searchRequest.source(searchSourceBuilder);
        SearchResponse searchResponse = restHighLevelClient.search(searchRequest, RequestOptions.DEFAULT);
        NutritionResponse nr = new NutritionResponse();
        ArrayList<Map<String ,Object>> list = new ArrayList<>(); 
        
        for(SearchHit searchHit : searchResponse.getHits().getHits()){
            list.add(searchHit.getSourceAsMap());
        }
        nr.setList(list);
        nr.setLength(searchResponse.getHits().getTotalHits().value);
        return  nr;

    }
}
