package com.example.freightflow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class FreightflowBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(FreightflowBackendApplication.class, args);
	}

}
