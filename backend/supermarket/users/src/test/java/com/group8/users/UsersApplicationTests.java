package com.group8.users;
import com.group8.users.controller.UsersController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class UsersApplicationTests {

	@Autowired
	UsersController usersController;

	@Test
	void contextLoad() {
		assertThat(usersController).isNotNull();
	}
}