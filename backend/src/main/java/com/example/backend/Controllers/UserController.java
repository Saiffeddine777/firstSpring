package com.example.backend.Controllers;

import com.example.backend.Services.UserService;
import com.example.backend.Models.UserModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class UserController{
    private final UserService userService;
     
    
    public UserController(UserService userService){
        this.userService = userService;
    }
    
    @PostMapping("/create")
    public ResponseEntity<UserModel> makeUser(@RequestBody UserModel user){
        UserModel madeUser = userService.createAUser(user);
        return new ResponseEntity<>(madeUser,HttpStatus.CREATED);
    } 
      
    @GetMapping("/all")
    public ResponseEntity<List<UserModel>> findUsers (){
        List <UserModel> users = userService.getUsers();
        return new ResponseEntity<>(users , HttpStatus.OK);
    }
     
    @GetMapping("/one/{id}")
    public ResponseEntity<Optional<UserModel>> findOneUser (@PathVariable String id ){
    Optional<UserModel> user = userService.getOneUser(id);
    if(user.isPresent()){
        return new ResponseEntity<>(user,HttpStatus.OK);
    }
    else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteOneUser (@PathVariable String id){
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<UserModel> putOneUser(@PathVariable String id, @RequestBody UserModel data){
         UserModel updated = userService.updateUser(id, data);
        return new ResponseEntity<>(updated,HttpStatus.ACCEPTED) ;
    }

}