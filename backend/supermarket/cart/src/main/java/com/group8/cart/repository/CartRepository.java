package com.group8.cart.repository;

import com.group8.cart.model.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * This interface is used as a repository for the Cart Service
 * @author Nikhila
 * @version 1.0
 * @since July 2022
 */

@Repository
public interface CartRepository extends MongoRepository<Cart, Integer> {
}
