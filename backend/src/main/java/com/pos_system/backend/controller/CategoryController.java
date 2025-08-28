package com.pos_system.backend.controller;

import com.pos_system.backend.model.Category;
import com.pos_system.backend.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private ICategoryService categoryService;

    @GetMapping("/get")
    public List<Category> getCategories(){
        return categoryService.getCategories();
    }

    @PostMapping("/create")
    public void saveCategory(@RequestBody Category category){
        categoryService.saveCategory(category);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCategory(@PathVariable Long id){
        categoryService.deleteCategory(id);
    }

    /*
    @PutMapping("/edit")
    public Category editCategory(@RequestBody Category category){
        categoryService.editCategory(category);
        return categoryService.findCategory(category.getId());
    }
    */


}
