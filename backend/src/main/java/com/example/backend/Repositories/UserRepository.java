package com.example.backend.Repositories;
import com.example.backend.Models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface UserRepository extends JpaRepository<UserModel,Integer>{

}

