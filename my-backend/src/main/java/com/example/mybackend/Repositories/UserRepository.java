package com.example.mybackend.Repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.mybackend.Models.UserModel;

public interface UserRepository extends JpaRepository<UserModel,Long>{
   
}