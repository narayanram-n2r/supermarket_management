package com.group8.products.controller;

import com.group8.products.model.Products;
import com.group8.products.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductsController {
    @Autowired
    ProductRepository productsRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/products")
    public ResponseEntity<List<Products>> getAllProduct(){
        return ResponseEntity.ok(productsRepository.findAll());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/product/{ID}")
    public ResponseEntity<Optional<Products>> getProduct(@PathVariable Integer ID){
        Optional<Products> product = productsRepository.findById(ID);
        if(product.isEmpty()){
            throw new RuntimeException("Product Not Found !!");
        }
        return ResponseEntity.ok(product);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addNewProduct")
    public void addProduct(@RequestBody Products product){
        productsRepository.save(product);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/updateProduct/{ID}")
    public void updateProduct(@PathVariable Integer ID, @RequestBody Products updateProductDetails){
        productsRepository.save(updateProductDetails);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/deleteProduct/{ID}")
    public void deleteProduct(@PathVariable Integer ID){
        productsRepository.deleteById(ID);
    }
}
