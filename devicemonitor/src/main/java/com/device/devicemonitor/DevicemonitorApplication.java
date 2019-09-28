package com.device.devicemonitor;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import com.device.devicemonitor.domain.service.BoilerDataGenerator;
import com.device.devicemonitor.domain.service.BoilerGen;

@SpringBootApplication
@EnableScheduling
//@ComponentScan("com.device")
public class DevicemonitorApplication {
	
	@Autowired
	BoilerGen boilerDataGenerator;

	public static void main(String[] args) {
		SpringApplication.run(DevicemonitorApplication.class, args);
	}
	
	 @Scheduled(fixedRate = 3000)
	    public void greeting() {
		 
		 boilerDataGenerator.dataGen();
	        
	    }

}
