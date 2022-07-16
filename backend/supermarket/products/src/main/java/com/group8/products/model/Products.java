package com.group8.products.model;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Products {
    @Id
    private Integer id;
    private  String title;
    private Integer price;
    private String description;
    private String category;
    private String imgUrl;
}
