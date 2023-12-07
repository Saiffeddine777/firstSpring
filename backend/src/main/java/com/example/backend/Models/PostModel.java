package com.example.backend.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import com.example.backend.Models.UserModel;
import com.fasterxml.jackson.annotation.JsonProperty;


@Entity

public class PostModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @JsonProperty
    @ManyToOne
    @JoinColumn(name = "user_id",nullable = false)
    private UserModel user_Id;

    @JsonProperty
    private String title; 

    @JsonProperty
    private String description;

    @JsonProperty
    private Boolean isPublished;
    
    public void setUser_Id(UserModel user_Id ){
         this.user_Id = user_Id;  
    }
    
    public void setTitle (String title){
        this.title = title;
    }

    public void setDescription(String description ){
        this.description = description;
    }

    public void setIsPublished(Boolean isPublished){
        this.isPublished = isPublished;
    }

    public Long getId(){
         return this.id;
    }

    public UserModel getUser_Id(){
        return this.user_Id;
    }

    public String getTitle(){
        return this.title;    
    }

    public String getDescription(){
        return this.description;
    }

    public Boolean getIsPublished(){
        return this.isPublished;
    }

}