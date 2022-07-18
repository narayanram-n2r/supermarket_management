package com.group8.products.repository;

import com.group8.products.model.Products;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * This interface is used as a repository for the Products Service
 * @author Nikhila
 * @version 1.0
 * @since July 2022
 */

@Repository
public interface ProductRepository extends MongoRepository<Products, Integer> {
}

