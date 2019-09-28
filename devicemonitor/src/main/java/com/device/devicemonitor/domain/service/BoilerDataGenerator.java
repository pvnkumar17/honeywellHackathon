package com.device.devicemonitor.domain.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.scheduling.annotation.Scheduled;
//import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.device.devicemonitor.domain.BoilerState;


@Service("BoilerDataGenerator")
public class BoilerDataGenerator implements BoilerGen {

	@Autowired
	@Qualifier("BoilerService")
	BoilerService boilerDataService;

	Random random = new Random();
	
	//@Scheduled(fixedRate = 5000)
	public void dataGen() {

		//Let us set the number of boilers as 3
		
		System.out.println("Generating data....");

		int n = 3;
		for(int i=1;i<=n;i++) {

			Integer temp = random.nextInt(90);

			Integer pressure = random.nextInt(20);

			BoilerState bstate = new BoilerState(i, temp, pressure);

			boilerDataService.addBoilerData(bstate);

		}

	}

}
