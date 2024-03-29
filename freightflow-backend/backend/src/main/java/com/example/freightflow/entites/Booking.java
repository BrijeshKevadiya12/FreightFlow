package com.example.freightflow.entites;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Booking {

    private String id;
    private String user;
    private String shipmentCountry;
    private String destinationCountry;
    private Date bookingDate;
    private String aboutProduct;

}