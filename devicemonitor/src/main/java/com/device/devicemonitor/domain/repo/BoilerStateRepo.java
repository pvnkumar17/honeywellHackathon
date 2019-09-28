package com.device.devicemonitor.domain.repo;

import java.util.List;

import javax.persistence.SqlResultSetMapping;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.device.devicemonitor.domain.BoilerState;

public interface BoilerStateRepo extends JpaRepository<BoilerState, Long> {
	
	//@Query("SELECT p. FROM Person p WHERE LOWER(p.lastName) = LOWER(:lastName)")
	//state_id, boiler_id, pressure, temperature
	
	//ORDER BY b.stateId DESC
	
	
	@Query(name = "selectLastN",nativeQuery = true)
	public List<BoilerState> findLastNBoilerData(@Param("boilerId") Integer boilerId,@Param("lastN") Integer lastN);
	
	//@Param("lastN") 
		
	//@Query(name = "selectQ")
    
	

}
