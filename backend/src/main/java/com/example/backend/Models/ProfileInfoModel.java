package com.example.backend.Models;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class ProfileInfoModel {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id ;
  @JsonProperty("job")
  private String job; 
  @JsonProperty("jobSector")
  private String jobSector;  
  @JsonProperty("professionalSummary")
  private String professionalSummary;
  @JsonProperty("fieldOfEducation")
  private String fieldOfEducation;
  
  @JsonProperty
  @OneToOne
  @JoinColumn(name= "user_Id" , nullable = false)
  private UserModel user_Id;
  
  public Long getId (){
    return this.id;
  }
  public String getJob (){
    return this.job;
  }
  public String getJobSector(){
     return this.jobSector; 
  }
  public String getProfessionalSummary(){
    return this.professionalSummary;
  }
  public String getFieldOfEducation(){
    return this.fieldOfEducation;
  }
  public UserModel getUser_Id(){
    return this.user_Id;
  }

  public void setJob (String job){
     this.job = job;
  }
  
  public void setJobSector(String jobSector){
     this.jobSector= jobSector;
  }

  public void setProfessionalSummary(String professionalSummary){
    this.professionalSummary = professionalSummary;
  }

  public void setFieldOfEducation(String fieldOfEducation){
     this.fieldOfEducation= fieldOfEducation;
  }

  public void setUser_Id(UserModel user_Id){
     this.user_Id = user_Id;
  } 
}
