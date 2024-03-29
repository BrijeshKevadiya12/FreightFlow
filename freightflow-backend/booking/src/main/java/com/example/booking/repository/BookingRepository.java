package com.example.booking.repository;

import com.example.booking.entites.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking,String> {
    List<Booking> findByUser(String user);
}
