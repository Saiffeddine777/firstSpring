package com.example.backend.Services;
import com.example.backend.Models.PostModel;
import com.example.backend.Models.UserModel;
import com.example.backend.Repositories.PostRepository;
import com.example.backend.Repositories.UserRepository;
import org.springframework.stereotype.Service;
import com.example.backend.Classes.PostClass;

import java.util.List;
import java.util.Optional;


@Service
public class PostService{
  private final PostRepository postRepository;
  private final UserRepository userRepository;
   
  public PostService (PostRepository postRepository ,UserRepository userRepository){
      this.postRepository = postRepository;
      this.userRepository= userRepository;
  }

  public PostModel createPost(PostClass post){
        PostModel postToInsert =new PostModel();
        postToInsert.setIsPublished(post.getIsPublished());
        postToInsert.setDescription(post.getDescription());
        postToInsert.setTitle(post.getTitle());
        UserModel UserPostOP =  userRepository.findById( post.getUser_Id().intValue()).get();
        postToInsert.setUser_Id(UserPostOP);
     return postRepository.save(postToInsert);
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