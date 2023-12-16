package com.example.backend.Classes;

public class ProfileInfoClass {

  private Long user_Id;
  private String job ;
  private String jobSector;
  private String professionalSummary;
  private String fieldOfEducation;
    

  public Long getUser_Id() {
      return user_Id;
  }
  public  String getJob (){
    return job;
  } 
  public String  getJobSector(){
    return jobSector;
  }
  public String getProfessionalSummary(){
    return  professionalSummary;
  }
  public String getFieldOfEducation(){
    return fieldOfEducation;
  }

  public void setUser_Id(Long user_Id ){
     this.user_Id = user_Id;
  }
  public void setJob(String job){
      this.job = job;
  }
  public void setJobSector(String jobSector){
      this.jobSector = jobSector;
  }
  public void setProfessionalSummary(String professionalSummary){
     this.professionalSummary = professionalSummary;
  }
  public void setFieldOfEducation(String fieldOfEducation){
    this.fieldOfEducation = fieldOfEducation;
  }
  

} 