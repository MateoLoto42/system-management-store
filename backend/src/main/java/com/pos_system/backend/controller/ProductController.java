package com.pos_system.backend.controller;

import com.pos_system.backend.model.Product;
import com.pos_system.backend.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private IProductService productService;

    @GetMapping("/all")
    public ResponseEntity<List<Product>> getProducts(){
        return ResponseEntity.ok(productService.getProducts());
    }

    @PostMapping("/create")
    public void saveProduct(@RequestBody Product product){
        productService.saveProduct(product);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
    }

    /*
    @PutMapping("/edit")
    public Product editProduct(@RequestBody Product product){
        productService.editProduct(product);
        return productService.findProduct(product.getId());
    }
    */





}
