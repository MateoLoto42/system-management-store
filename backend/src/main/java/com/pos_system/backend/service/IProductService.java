package com.pos_system.backend.service;

import com.pos_system.backend.model.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    public List<Product> getProducts();
    public Optional<Product> findProductById(Long id);
    public Optional<Product> findProductByCode(String code);
    public List<Product> getProductsByCategory(Long categoryId);
    public Product saveProduct(Product prod);
    public void deleteProduct(Long id);
    public Product editProduct(Long id, Product newProd);
    public Product updateStock(Long id, Integer newStock);
    public void discountStock(Long prodId, Integer amount);

}
