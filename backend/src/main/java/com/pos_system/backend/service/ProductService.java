package com.pos_system.backend.service;

import com.pos_system.backend.model.Product;
import com.pos_system.backend.repository.CategoryRepository;
import com.pos_system.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService{

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    /*
        DEVUELVE TODOS LOS PRODUCTOS EN UNA LISTA
     */
    @Override
    public List<Product> getProducts() {
        return productRepository.findAll();
    }
    /*
        BUSCA PRODUCTO POR ID
     */
    @Override
    public Optional<Product> findProductById(Long id) {
        return productRepository.findById(id);
    }

    /*
        BUSCA PRODUCTO POR CODIGO
     */
    @Override
    public Optional<Product> findProductByCode(String code) {
        return productRepository.findByCode(code);
    }

    /*
        OBTIENE TODOS LOS PRODUCTOS DE UNA CATEGORIA
     */
    @Override
    public List<Product> getProductsByCategory(Long categoryId) {
        if(categoryRepository.existsById(categoryId)){
            System.out.println("Categoria no encontrada con id"+categoryId); //Reemplazar con una Exception mas adelante
        }
        return productRepository.findByCategoryId(categoryId);
    }

    /*
        ALTA DE PRODUCTO
     */
    @Override
    public Product saveProduct(Product prod) {
        //Valida que el codigo no exista
        if(productRepository.existsByCode(prod.getCode())){
            System.out.println("Ya existe un producto con el codigo"+ prod.getCode());//Reemplazar con una exception
        }
        //Valida Stock inicial
        if (prod.getStock()<0){
            System.out.println("El Stock no puede ser negativo");
        }
        //Valida precio
        if (prod.getPrice()<=0){
            System.out.println("El precio debe ser mayor a 0");
        }
        //Setea producto activo
        prod.setState(true);
        return productRepository.save(prod);
    }

    /*
        ELIMINACION LOGICA DEL PRODUCTO
        Cambio de estado -> False
     */
    @Override
    public void deleteProduct(Long id) {
        Product product = findProductById(id).orElse(null);
        product.setState(false);
        productRepository.save(product);
    }

    /*
        METODO PARA EDITAR PRODUCTO
     */
    @Override
    public Product editProduct(Long id, Product newProd) {

        Product product = findProductById(id).orElse(null);

        // Validar código único (si cambió)
        //Compara si cambio el codigo unico de producto y tambien si el codigo ya existe para evitar repeticion
        if (product.getCode().equals(newProd.getCode()) && productRepository.existsByCode(newProd.getCode())){
            System.out.println("Ya existe un producto con el codigo"+newProd.getCode()); //Reemplazar por una exception
        }

        product.setCode(newProd.getCode());
        product.setName(newProd.getName());
        product.setDescription(newProd.getDescription());
        product.setPrice(newProd.getPrice());
        product.setCategory(newProd.getCategory());

        //Antes de actualizar el stock valida si no es negativo
        if (newProd.getStock()<0){
            System.out.println("El Stock no puede ser negativo");
        }
        product.setStock(newProd.getStock());
        return productRepository.save(product);
    }

    /*
        METODO QUE ACTUALIZA EL STOCK
     */
    @Override
    public Product updateStock(Long id, Integer newStock) {

        Product product = findProductById(id).orElse(null);

        if (newStock < 0){
            System.out.println("El Stock no puede ser negativo");
        }
        product.setStock(newStock);
        return productRepository.save(product);
    }

    /*
        METODO PARA DESCONTAR STOCK DE UN PRODUCTO
     */
    @Override
    public void discountStock(Long prodId, Integer amount) {
        Product product = findProductById(prodId).orElse(null);

        if (product.getStock()<amount){
            System.out.println("Stock Insuficiente");
        }
        product.setStock(product.getStock()-amount);
        productRepository.save(product);
    }


}
