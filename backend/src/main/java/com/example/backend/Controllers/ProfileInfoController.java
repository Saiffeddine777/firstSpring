package com.example.backend.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Classes.ProfileInfoClass;
import com.example.backend.Models.ProfileInfoModel;
import com.example.backend.Services.ProfileInfoService;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/Profiles")

public class ProfileInfoController{
  private final ProfileInfoService profileInfoService ;
    public ProfileInfoController(ProfileInfoService profileInfoService){
       this.profileInfoService = profileInfoService;
    }  
 

  @PostMapping("/create")
  public ResponseEntity<ProfileInfoModel> makeProfileModel (@RequestBody ProfileInfoClass data){
     ProfileInfoModel profile = this.profileInfoService.createProfileInfo(data);
     return new ResponseEntity<>(profile,HttpStatus.CREATED);
  }
  
   @GetMapping("/all")
   public ResponseEntity<List<ProfileInfoModel>> findAllProfiles(){
       List<ProfileInfoModel> profiles = this.profileInfoService.getAlLProfiles();
       return new ResponseEntity<>(profiles,HttpStatus.ACCEPTED);
   }

  @GetMapping("/one/{id}")
  public ResponseEntity<ProfileInfoModel>  findOneProfile(@PathVariable Long id){
      ProfileInfoModel profile =  this.profileInfoService.getOneProfile(id).get();
      return new ResponseEntity<>(profile,HttpStatus.ACCEPTED);
  }
  @PutMapping("/update/{id}")
  public ResponseEntity<ProfileInfoModel> updateAProfile(@PathVariable Long id ,@RequestBody ProfileInfoModel data){
      ProfileInfoModel updated = this.profileInfoService.updateProfile(id, data);
      return new ResponseEntity<>(updated, HttpStatus.ACCEPTED);
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<Void> deleteProfileRecord(@PathVariable Long id){
    this.profileInfoService.deleteProfileInfo(id);
    return new ResponseEntity<>(null, HttpStatus.ACCEPTED);
}
}