package com.pos_system.backend.service;

import com.pos_system.backend.model.Category;

import java.util.List;

public interface ICategoryService {
    public List<Category> getCategories();
    public void saveCategory(Category category);
    public void deleteCategory(Long id);
    public Category findCategory(Long id);
    //public void editCategory(...);
}