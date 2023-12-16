package com.example.backend.Services;

import com.example.backend.Classes.ProfileInfoClass;
import com.example.backend.Models.ProfileInfoModel;
import com.example.backend.Models.UserModel;
import com.example.backend.Repositories.ProfileInfoRepository;
import com.example.backend.Repositories.UserRepository;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProfileInfoService{

    private final ProfileInfoRepository profileInfoRepository;
    private final UserRepository userRepository;
    
    public ProfileInfoService (ProfileInfoRepository profileInfoRepository, UserRepository userRepository){
         this.profileInfoRepository = profileInfoRepository;
         this.userRepository = userRepository;
    }

    public ProfileInfoModel createProfileInfo(ProfileInfoClass profileData){
        ProfileInfoModel profileInfo = new ProfileInfoModel();
        profileInfo.setJob(profileData.getJob());
        profileInfo.setJobSector(profileData.getJobSector());
        profileInfo.setFieldOfEducation(profileData.getFieldOfEducation());
        profileInfo.setProfessionalSummary(profileData.getProfessionalSummary());
        UserModel userOfTheprofile = this.userRepository.findById(profileData.getUser_Id().intValue()).get();
        profileInfo.setUser_Id(userOfTheprofile);
        return this.profileInfoRepository.save(profileInfo);
    }


    public  List<ProfileInfoModel> getAlLProfiles(){
          return this.profileInfoRepository.findAll();
    }
    
    public Optional<ProfileInfoModel> getOneProfile (Long id){
        return this.profileInfoRepository.findById(id.intValue());
    }

    public void deleteProfileInfo (Long id){
        this.profileInfoRepository.deleteById(id.intValue());
    }

    public ProfileInfoModel updateProfile(Long id , ProfileInfoModel data){
       
      ProfileInfoModel profileToUpdate =  this.profileInfoRepository.findById(id.intValue()).get() ;
       if (!data.getJob().equals(profileToUpdate.getJob())){
            profileToUpdate.setJob(data.getJob());
       }
       if (!data.getJobSector().equals(profileToUpdate.getJobSector())){
            profileToUpdate.setJobSector(data.getJobSector());
       }
       if (!data.getFieldOfEducation().equals(profileToUpdate.getFieldOfEducation())){
            profileToUpdate.setFieldOfEducation(data.getFieldOfEducation());
       }
       if (!data.getProfessionalSummary().equals(profileToUpdate.getProfessionalSummary())){
            profileToUpdate.setProfessionalSummary(data.getProfessionalSummary());
       }
      return profileToUpdate;
    }

}