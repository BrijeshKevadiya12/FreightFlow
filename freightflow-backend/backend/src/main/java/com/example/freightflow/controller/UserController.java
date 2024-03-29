package com.example.freightflow.controller;

import com.example.freightflow.entites.User;
import com.example.freightflow.service.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/home")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {


    @Autowired
    private UserServices userServices;
    @GetMapping("/getuser")
    public List<User> getUSers(){
        return this.userServices.getUSers();
    }
}
