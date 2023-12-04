package com.example.backend.Repositories;
import com.example.backend.Models.PostModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<PostModel,Integer>{
   
}
