package com.example.freightflow.controller;

import com.example.freightflow.entites.Booking;
import com.example.freightflow.service.BookingClient;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    @Autowired
    BookingClient bookingClient;

    @PostMapping
    public Booking createBooking(@RequestBody Booking bookingdata) {
        bookingClient.booking(bookingdata);
        return bookingdata;
    }

    @GetMapping("/{user}")
    public List<Booking> getBookings(@PathVariable String user) {
        return bookingClient.getBookings(user);
    }

    @PutMapping("/delete/{bookingsid}")
    public void deleteBooking(@PathVariable("bookingsid") String bookingsid) {

        bookingClient.deleteBooking(bookingsid);
    }

    @GetMapping("/sortbydate/{user}")
    List<Booking> sortByDate(@PathVariable("user") String user){
        return bookingClient.sortByDate(user);
    }
}
