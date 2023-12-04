package com.example.backend.Controllers;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import com.example.backend.Models.PostModel;
import com.example.backend.Services.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/posts")

public class PostController {
    private final PostService postService;

    public PostController (PostService postService){
         this.postService = postService;
    } 

    @PostMapping("/create")
    public ResponseEntity<PostModel> makeAPost (@RequestBody PostModel PostBody){
        PostModel postMade = postService.createPost(PostBody);
        return new ResponseEntity<PostModel>(postMade,HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<PostModel>> findAllPosts(){
        List<PostModel> posts = postService.getPosts();
        return new ResponseEntity<>(posts,HttpStatus.OK);
    }

    @GetMapping("/one/{id}")
    public ResponseEntity<Optional<PostModel>> findOnePost(@RequestParam  String id ){
         return new ResponseEntity<>(postService.getOnePost(id),HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteOnePost(@RequestParam  String id ){
         postService.deletePost(id);
         return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<PostModel> updateOneUser(@RequestParam String id, @RequestBody PostModel body ){
        return new ResponseEntity<>(postService.updatePost(id, body),HttpStatus.OK);
    }    
}