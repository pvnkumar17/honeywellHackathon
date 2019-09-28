package com.device.devicemonitor.domain.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.device.devicemonitor.domain.BoilerState;
import com.device.devicemonitor.domain.service.BoilerDataService;

@RestController
@RequestMapping(value={"/boiler"})
@CrossOrigin(origins = "http://localhost:3000")
public class BoilerDataController {

	@Autowired
	BoilerDataService boilerDataService;

	@RequestMapping(path="/{id}/{lastN}")
	public ResponseEntity<List<Map<String,List<Integer>>>> getBoilerData(@PathVariable("id") Integer id,@PathVariable("lastN") Integer lastN) {

		   

		System.out.println("Fetching boiler "+id + "lastN"+ lastN);

		List<BoilerState> boilerData =boilerDataService.getBoilerData(id, lastN);
		
		
		Map<String,List<Integer>> map = new HashMap<String,List<Integer>>();
		
		if(boilerData==null) {
			
			
			
			return new ResponseEntity<List<Map<String,List<Integer>>>>(HttpStatus.NOT_FOUND);
		}
		else {
			
			List<Integer> temps = new ArrayList<Integer>();
			List<Integer> pressures = new ArrayList<Integer>();
			for(BoilerState state : boilerData) {
				
				temps.add(state.getTemperature());
				pressures.add(state.getPressure());
			}
			map.put("temperature",temps);
			map.put("pressure",pressures);
			map.put("id",Arrays.asList(id));
			
			List<Map<String,List<Integer>>> list = new ArrayList<Map<String,List<Integer>>>();
			
			list.add(map);
			return new  ResponseEntity<List<Map<String,List<Integer>>>>(list,HttpStatus.OK);
		}


	}
	

}
