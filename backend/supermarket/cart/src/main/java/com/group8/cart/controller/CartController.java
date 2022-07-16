package com.group8.cart.controller;

import com.group8.cart.model.Cart;
import com.group8.cart.repository.CartRepository;
import com.group8.products.model.Products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    CartRepository cartRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/cart")
    public ResponseEntity<List<Cart>> showCart(){
        return ResponseEntity.ok(cartRepository.findAll());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addToCart")
    public void addProductToCart(@RequestBody Products product){
        Cart cart = new Cart();
        cart.setId(product.getId());
        cart.setTitle(product.getTitle());
        cart.setPrice(product.getPrice());
        cart.setDescription(product.getDescription());
        cart.setCategory(product.getCategory());
        cart.setImgUrl(product.getImgUrl());
        cartRepository.save(cart);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/removeFromCart/{ID}")
    public void removeFromCart(@PathVariable Integer ID){
        cartRepository.deleteById(ID);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/removeAll")
    public void removeFromCart(){
        cartRepository.deleteAll();
    }
}
