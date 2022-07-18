package com.group8.users.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

/**
 * This class is used as a model for the Users Service
 * @author Nikhila
 * @version 1.0
 * @since July 2022
 */

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Users {
    @Id
    private Integer id;
    private  String password;
}
