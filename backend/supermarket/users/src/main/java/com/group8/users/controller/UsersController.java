package com.group8.users.controller;

import com.group8.users.model.Users;
import com.group8.users.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    UsersRepository usersRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/users")
    public ResponseEntity<List<Users>> getAllUsers(){
        return ResponseEntity.ok(usersRepository.findAll());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addNewUser")
    public void addNewUser(@RequestBody Users user){
        usersRepository.save(user);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/updateUser/{ID}")
    public void updateUser(@PathVariable Integer ID, @RequestBody Users updateUserDetails){
        usersRepository.save(updateUserDetails);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/deleteUser/{ID}")
    public void deleteUser(@PathVariable Integer ID){
        usersRepository.deleteById(ID);
    }
}
