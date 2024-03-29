package com.example.booking.entites;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "booking")
public class Booking {

    @Id
    private String id;
    private String user;
    private String shipmentCountry;
    private String destinationCountry;
    private LocalDate bookingDate;

    private String aboutProduct;

    public void setIdDate() {
        this.id = UUID.randomUUID().toString().replaceAll("-", "").substring(0, 8);
        this.bookingDate =LocalDate.now();
    }
}
