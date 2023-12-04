package com.example.backend.Services;
import com.example.backend.Models.PostModel;
import com.example.backend.Repositories.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class PostService{
  private final PostRepository postRepository;
   
  public PostService (PostRepository postRepository){
      this.postRepository = postRepository;
  }
  @Autowired

  public PostModel createPost(PostModel post){
     return postRepository.save(post);
  } 

  public List<PostModel>  getPosts(){
    return postRepository.findAll();
  }

  public Optional<PostModel> getOnePost (String id){
    return postRepository.findById(Integer.parseInt(id));
  }

  public void deletePost (String id){
     this.postRepository.deleteById(Integer.parseInt(id));
  }

  public PostModel updatePost (String id,PostModel obj){
      Optional<PostModel> postToUpdate = postRepository.findById(Integer.parseInt(id));
      if (postToUpdate.isPresent()){
         PostModel willUpdate = postToUpdate.get();

         if (!obj.getTitle().equals(willUpdate.getTitle())){
                willUpdate.setTitle(obj.getTitle());
         }
         if(!obj.getDescription().equals(willUpdate.getDescription())){
               willUpdate.setDescription(obj.getDescription());
         
         if(!obj.getIsPublished()!=willUpdate.getIsPublished()){
               willUpdate.setIsPublished(obj.getIsPublished()); 
         }  
         postRepository.save(willUpdate);
         return willUpdate;
        }
      }
      return null;
  }

}