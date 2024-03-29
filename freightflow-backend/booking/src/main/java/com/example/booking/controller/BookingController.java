package com.example.booking.controller;

import com.example.booking.entites.Booking;
import com.example.booking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/add")
    Booking addBooking(@RequestBody Booking bookingData){
        Booking book = bookingService.add(bookingData);
        return book;
    }

    @GetMapping("/getbyuser")
    List<Booking> getBookings(@RequestParam("user") String user){
        List<Booking> bookings = bookingService.getAll(user);
        return bookings;
    }

    @PutMapping("/delete-booking")
    void deleteBooking(@RequestParam("bookingsid") String bookingsid){

        bookingService.deleteBooking(bookingsid);
    }

    @GetMapping("/sortbydate")
    List<Booking> sortbydate(@RequestParam("user") String user){
        return bookingService.sortByDate(user);
    }
}
