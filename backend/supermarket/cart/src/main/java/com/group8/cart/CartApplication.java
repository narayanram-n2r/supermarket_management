package com.group8.cart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

/**
 * This class is used as a view for the Cart Service
 * @author Sravya
 * @version 1.0
 * @since July 2022
 */
@SpringBootApplication
@EnableDiscoveryClient
public class CartApplication {

	public static void main(String[] args) {
		SpringApplication.run(CartApplication.class, args);
	}

}
