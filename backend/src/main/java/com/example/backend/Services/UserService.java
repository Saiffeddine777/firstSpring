package com.example.backend.Services;
import com.example.backend.Repositories.UserRepository;
import com.example.backend.Models.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.Classes.PasswordGeneratorClass;

import java.util.List;
import java.util.Optional;

@Service

public class UserService {
    
   private final UserRepository userRepository;

   @Autowired

   public UserService (UserRepository userRepository) {
      this.userRepository = userRepository;
   }

   public UserModel createAUser (UserModel user){
        user.setPassword(PasswordGeneratorClass.getGeneratedPassword());
        return userRepository.save(user);
   }
  
   public List<UserModel> getUsers(){
       return userRepository.findAll();
   }

   public Optional<UserModel> getOneUser (String id){
        return userRepository.findById(Integer.parseInt((id)));
   }

     public UserModel updateUser (String id , UserModel data){
          Optional<UserModel>  recordToUpdate = userRepository.findById(Integer.parseInt((id)));
          if (recordToUpdate.isPresent()){
          UserModel presentRecordToUpdate = recordToUpdate.get();
          
          if (data.getEmail() != null && !data.getEmail().equals(presentRecordToUpdate.getEmail())){
               presentRecordToUpdate.setEmail(data.getEmail());
          }
          
               if (data.getFirstName() != null && !data.getFirstName().equals(presentRecordToUpdate.getFirstName())){
               presentRecordToUpdate.setFirstName(data.getFirstName());
          }
     
               if (data.getLastName() != null && !data.getLastName().equals(presentRecordToUpdate.getLastName())){
               presentRecordToUpdate.setLastName(data.getLastName());
          }

               if (data.getUserName() != null && !data.getUserName().equals(presentRecordToUpdate.getUserName())){
               presentRecordToUpdate.setUserName(data.getUserName());
          }
     
               if (data.getPhoneNumber() != null && !data.getPhoneNumber().equals(presentRecordToUpdate.getPhoneNumber())){
               presentRecordToUpdate.setPhoneNumber(data.getPhoneNumber());
          }
     
               if (data.getRole() != null && data.getRole() != presentRecordToUpdate.getRole()){
               presentRecordToUpdate.setRole(data.getRole());
          }
          userRepository.save(presentRecordToUpdate);
          return presentRecordToUpdate;
     
          }
          return null;
     }
 

   public void deleteUser (String id){
      userRepository.deleteById(Integer.parseInt(id));
   }



}