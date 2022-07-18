package com.group8.cart.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

/**
 * This class is used as a model for the Cart Service
 * @author Nikhila
 * @version 1.0
 * @since July 2022
 */

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Cart {
    @Id
    private Integer id;
    private  String title;
    private Integer price;
    private String description;
    private String category;
    private String imgUrl;
}