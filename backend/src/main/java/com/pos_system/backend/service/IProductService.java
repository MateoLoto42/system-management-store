package com.pos_system.backend.service;

import com.pos_system.backend.model.Product;

import java.util.List;

public interface IProductService {
    public List<Product> getProducts();
    public void saveProduct(Product prod);
    public void deleteProduct(Long id);
    public Product findProduct(Long id);
    //public void editProduct(...);
}
