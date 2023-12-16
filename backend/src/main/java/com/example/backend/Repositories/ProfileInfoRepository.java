package com.example.backend.Repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.Models.ProfileInfoModel;


@Repository
public interface ProfileInfoRepository extends JpaRepository<ProfileInfoModel,Integer>{

}