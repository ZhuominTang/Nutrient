package com.nutrient.controller;

import org.springframework.web.bind.annotation.*;

import com.csvreader.CsvWriter;
import com.nutrient.pojo.FoodNutrient;
import com.nutrient.pojo.Nutrition;
import com.nutrient.service.NutritionService;


import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;


import javax.servlet.http.HttpServletResponse;
import com.nutrient.pojo.NutritionResponse;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
@RequestMapping("/api/nutrition")
public class NutritionController {

    @Autowired
    private NutritionService nutritionService;

    @GetMapping("/search/{keyword}/{pageNo}/{pageSize}")
    @ResponseBody
    public NutritionResponse search(@PathVariable("keyword") String keyword, @PathVariable("pageNo") int pageNo,
            @PathVariable("pageSize") int pageSize) {

        return nutritionService.findNutrition(keyword, pageNo, pageSize);

    }

    // @GetMapping("/test1")
    // @ResponseBody
    // public List<FoodNutrient> test() {
    //     nutritionService.testNutrition();
    //     return nutritionService.testNutrition();

    // }

    // @GetMapping("/test2")
    // @ResponseBody
    // public ResponseEntity<String> test2() {
    //     boolean flag = nutritionService.testNutrition2();
    //     if (flag)
    //         return new ResponseEntity<>("{\"message\": \"Success\"}", HttpStatus.CREATED);
    //     else
    //         return new ResponseEntity<>("{\"message\": \"Fail\"}", HttpStatus.CREATED);
    // }

    @PostMapping("/export")
    public void exportRecord(HttpServletResponse response,@RequestBody List<String> nutrition){

        List<Nutrition> datas = nutritionService.findRequiredNutrition(nutrition);

        
    try {
        File tempFile = createTempFile(datas);
        outCsvStream(response, tempFile);
        deleteFile(tempFile);

    } catch (IOException e) {
        System.out.println(e);
    }
}


public File createTempFile(List<Nutrition> datas) throws IOException {
    File tempFile = File.createTempFile("vehicle", ".csv");
    CsvWriter csvWriter = new CsvWriter(tempFile.getCanonicalPath(), ',', Charset.forName("UTF-8"));
    if(datas.size()>0){
        ArrayList<String> headerList = new ArrayList<>();
        headerList.add("");
        for(FoodNutrient fn:datas.get(0).getFoodNutrients()){
            headerList.add(fn.getNutrient().getName()+"("+fn.getNutrient().getUnitName()+")");
        }

        csvWriter.writeRecord(headerList.toArray(new String[headerList.size()]));
    }

    for (Nutrition data : datas) {

        
        csvWriter.write(data.getDescription());
        for(FoodNutrient fn:data.getFoodNutrients()){
            csvWriter.write(fn.getAmount()+"");
        }

        csvWriter.endRecord();
    }
    csvWriter.close();
    return tempFile;
}


public void outCsvStream(HttpServletResponse response,File tempFile) throws IOException {
    java.io.OutputStream out = response.getOutputStream();
    byte[] b = new byte[10240];
    java.io.File fileLoad = new java.io.File(tempFile.getCanonicalPath());
    response.reset();
    response.setHeader("Access-Control-Allow-Origin","*"); 
    response.setHeader("Access-Control-Expose-Headers","*");
    response.setContentType("application/csv");
    response.setHeader("Access-Control-Allow-Headers", "x-requested-with,Cache-Control,Pragma,Content-Type,Authorization,authorization,content-disposition"); 
    response.setHeader("content-disposition", "attachment; filename=export.csv");
    java.io.FileInputStream in = new java.io.FileInputStream(fileLoad);
    int n;

    while ((n = in.read(b)) != -1) {
 
        out.write(b, 0, n);
    }
    in.close();
    out.close();
}


public static boolean deleteFile( File file) {
    if (file.exists() && file.isFile()) {
        if (file.delete()) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

}
