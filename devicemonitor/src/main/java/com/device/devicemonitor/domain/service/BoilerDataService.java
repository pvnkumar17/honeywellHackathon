package com.device.devicemonitor.domain.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.device.devicemonitor.domain.BoilerState;
import com.device.devicemonitor.domain.repo.BoilerStateRepo;

@Service(value = "BoilerService")
@Transactional
public class BoilerDataService implements BoilerService {

	@Autowired
	BoilerStateRepo boilerStateRepo;


	public List<BoilerState> getBoilerData(Integer boilerId,Integer lastN){

		List<BoilerState> boilerStateData = boilerStateRepo.findLastNBoilerData(boilerId,lastN);
		
		//List<BoilerState> boilerStateDataAll = boilerStateRepo.findAll(); //.stream().collect(Collectors.toList());
		
		return boilerStateData;
		//return boilerStateDataAll;

	}
	
	public void addBoilerData(BoilerState state) {
		
		//System.out.println("Adding "+state);
		boilerStateRepo.save(state);
		
	}
	
	

}
