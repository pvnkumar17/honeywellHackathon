package com.device.devicemonitor.domain.service;

import java.util.List;

import com.device.devicemonitor.domain.BoilerState;

public interface BoilerService {
	
	public List<BoilerState> getBoilerData(Integer boilerId,Integer lastN);
	public void addBoilerData(BoilerState state);

}
