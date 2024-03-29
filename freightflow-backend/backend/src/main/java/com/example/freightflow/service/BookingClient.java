package com.example.freightflow.service;


import com.example.freightflow.entites.Booking;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(url = "http://localhost:8081" , value = "booking")
public interface BookingClient {

    @PostMapping("/booking/add")
    Booking booking(@RequestBody Booking bookingdata);

    @GetMapping("/booking/getbyuser")
    List<Booking> getBookings(@RequestParam("user") String user);


    @PutMapping("/booking/delete-booking")
    void deleteBooking(@RequestParam("bookingsid") String bookingsid);

    @GetMapping("/booking/sortbydate")
    List<Booking> sortByDate(@RequestParam("user") String user);
}
