package com.example.backend.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonProperty;


@Entity

public class PostModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @JsonProperty
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Long user_id;

    @JsonProperty
    private String title; 

    @JsonProperty
    private String description;

    @JsonProperty
    private Boolean isPublished;
    
    public void setUser_Id(Long user_Id ){
         this.user_id = user_Id;  
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

    public Long getUser_Id(){
        return this.user_id;
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