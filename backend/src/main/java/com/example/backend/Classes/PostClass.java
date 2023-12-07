package com.example.backend.Classes;




public class PostClass {

    private Long user_Id; 
    private String description; 
    private String title; 
    private Boolean isPublished;  

   public void setUser_Id(Long user_Id){
        this.user_Id = user_Id;
   }
    public void setDescription(String description){
        this.description = description;
   }
    public void setTitle(String title){
        this.title = title;
   }
    public void setIsPublished(Boolean isPublished){
        this.isPublished = isPublished;
   }

   public Long getUser_Id(){
       return this.user_Id ;
   }
    public String getDescription(){
        return this.description;
   }
    public String getTitle(){
        return this.title ;
   }
    public Boolean getIsPublished(){
        return this.isPublished ;
   }
}
    