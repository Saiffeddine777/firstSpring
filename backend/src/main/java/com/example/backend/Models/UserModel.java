package com.example.backend.Models;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity

public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Integer id ;
    @JsonProperty("firstName")
    private String firstName;
    @JsonProperty("lastName")
    private String lastName;
    @JsonProperty("userName")
    private String userName;
    @JsonProperty("email")
    private String email;
    @JsonProperty("phoneNumber")
    private String phoneNumber;
    @JsonProperty("role")
    @Enumerated(EnumType.STRING)
    private  UserRole role ;
    
    public enum UserRole {
        Admin, User, Guest, Student,Publisher
    }


    public void setFirstName (String firstName){
          this.firstName = firstName;
    } 
    public void setLastName (String lastName){
          this.lastName = lastName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    } 

    public void setEmail (String  email ){
        this.email  = email;
    }

    public void setPhoneNumber(String phoneNumber){
        this.phoneNumber = phoneNumber;
    }

    public void setRole(UserRole role){
        this.role = role ;
    }
    
    public Integer getId (){
        return id;
    }

    public String getFirstName(){
       return firstName;
    }

    public String getLastName (){
        return lastName;
    }

    public String getEmail(){
        return email;
    }
    public String getPhoneNumber(){
        return phoneNumber; 
    }
    public String getUserName(){
        return userName;
    }
    
    public UserRole getRole (){
        return role;
    }
}
