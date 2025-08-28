package com.pos_system.backend.service;

import com.pos_system.backend.model.Product;
import com.pos_system.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getProducts() {
        return List.of();
    }

    @Override
    public void saveProduct(Product prod) {

    }

    @Override
    public void deleteProduct(Long id) {

    }

    @Override
    public Product findProduct(Long id) {
        return null;
    }
}
