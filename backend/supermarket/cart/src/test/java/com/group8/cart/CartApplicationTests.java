package com.group8.cart;
import com.group8.cart.controller.CartController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class CartApplicationTests {
    @Autowired
    CartController cartController;

    @Test
    void contextLoad() {
        assertThat(cartController).isNotNull();
    }
}