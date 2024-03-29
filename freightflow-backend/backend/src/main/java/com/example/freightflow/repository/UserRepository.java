package com.example.freightflow.repository;

import com.example.freightflow.entites.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String> {
}
