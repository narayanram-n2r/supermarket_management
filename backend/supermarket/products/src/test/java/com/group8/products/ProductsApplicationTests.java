package com.group8.products;
import com.group8.products.controller.ProductsController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class ProductsApplicationTests {
	@Autowired
	ProductsController productsController;

	@Test
	void contextLoad() {
		assertThat(productsController).isNotNull();
	}
}