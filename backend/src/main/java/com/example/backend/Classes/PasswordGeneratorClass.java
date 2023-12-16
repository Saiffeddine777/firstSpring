package com.example.backend.Classes;

import org.passay.*;

public class PasswordGeneratorClass{
    
         static PasswordGenerator generator = new PasswordGenerator();
         static CharacterRule lowerCaseRule  = new CharacterRule(EnglishCharacterData.LowerCase);
         static CharacterRule upperCaseRule =new CharacterRule(EnglishCharacterData.UpperCase);
         static CharacterRule digitRule = new CharacterRule(EnglishCharacterData.Digit);
         static CharacterRule specialCharRule = new CharacterRule(new CharacterData() {
            public String getErrorCode (){
                return "ERROR_CODE";
            }
            public String getCharacters(){
                return "@#$%^&*()_+";
            }
         });
    



    public static String getGeneratedPassword (){
        return generator.generatePassword(32,lowerCaseRule,upperCaseRule,digitRule,specialCharRule);
    }
}
    
