package com.example.mybackend.Models;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class UserModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonProperty("userName")
    private String userName ;
    @JsonProperty("firstName")
    private String firstName;
    @JsonProperty("lastName")
    private String lastName ;
    @JsonProperty("email")
    private String email;
    

    public Long getId(){
        return id;
    }

    public String getFirstName(){
        return this.firstName;
    }
    public String getLastName(){
        return this.lastName;
    }

    public String getEmail(){
        return this.email;
    }

    public String getUserName(){
        return this.userName;
    }

    public void setUserName(String newUserName){
        this.userName = newUserName;
    }
    public void setEmail(String newEmail){
        this.email = newEmail;
    }
    public void setFirstName(String newFirstName){
        this.firstName = newFirstName; 
    }  
    public void setLastName(String newLastname){
        this.lastName = newLastname;
    }

} 