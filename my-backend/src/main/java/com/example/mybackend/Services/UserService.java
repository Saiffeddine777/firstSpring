package com.example.mybackend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.mybackend.Repositories.UserRepository;

@Service 

public class UserService {
    private final UserRepository userRepository;

    @Autowired
      public UserService(UserRepository userRepository){
         this.userRepository= userRepository;
      }
}