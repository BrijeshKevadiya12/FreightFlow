package com.example.booking.service;


import com.example.booking.entites.Booking;
import com.example.booking.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;
    public Booking add(Booking bookingData) {
        bookingData.setIdDate();
        return bookingRepository.save(bookingData);
    }

    public List<Booking> getAll(String user) {
        return bookingRepository.findByUser(user);
    }

    public void deleteBooking(String bookingsid) {
        bookingRepository.deleteById(bookingsid);
    }

    public List<Booking> sortByDate(String user) {
        List<Booking> data = bookingRepository.findByUser(user);
        List<Booking> sortedData = data.stream()
                .sorted(Comparator.comparing(Booking::getBookingDate).reversed())
                .collect(Collectors.toList());

        return sortedData;
    }
}
