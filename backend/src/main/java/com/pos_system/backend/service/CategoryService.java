package com.pos_system.backend.service;

import com.pos_system.backend.model.Category;
import com.pos_system.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService{

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> getCategories() {
        return List.of();
    }

    @Override
    public void saveCategory(Category category) {

    }

    @Override
    public void deleteCategory(Long id) {

    }

    @Override
    public Category findCategory(Long id) {
        return null;
    }
}
