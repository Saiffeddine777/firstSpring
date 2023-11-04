package com.example.mybackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.mybackend.Repositories.UserRepository;
import java.util.Optional;


import com.example.mybackend.Models.UserModel;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController{
    @Autowired
    private UserRepository userRepository;
      
    @PostMapping("/create")
    public ResponseEntity<UserModel> createUser(@RequestBody UserModel user){
       UserModel saveduser = userRepository.save(user);
       return ResponseEntity.ok(saveduser);
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserModel>> getAllUsers() {
           List<UserModel>  users= userRepository.findAll();
           return ResponseEntity.ok(users);
    }
    
    @GetMapping("/user/{id}")
    public ResponseEntity<UserModel> getOneUser(@PathVariable Long id){
         Optional<UserModel> user = userRepository.findById(id);
         if(user.isPresent()){
                return ResponseEntity.ok(user.get());
         }
         else{
            return ResponseEntity.notFound().build();
         }
        
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<UserModel> updateOneUser (@PathVariable Long id , @RequestBody  UserModel userData){
        Optional<UserModel> existingUser =  userRepository.findById(id);

        if(existingUser.isPresent()){
            UserModel user = existingUser.get();
            user.setFirstName(userData.getFirstName());
            user.setLastName(userData.getLastName()); 
            user.setEmail(userData.getEmail());   
            user.setUserName(userData.getUserName());

            UserModel updatedUserModel = userRepository.save(user);
            return ResponseEntity.ok(user);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
     public ResponseEntity<UserModel> deleteOneUser(@PathVariable Long id){

          Optional<UserModel> userToFind = userRepository.findById(id);
          if (userToFind.isPresent()){
            userRepository.delete(userToFind.get());
             return ResponseEntity.ok(userToFind.get());
          }
          else{
             return ResponseEntity.notFound().build();
          }
     }
}
