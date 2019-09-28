package com.device.devicemonitor.domain;

import javax.persistence.Column;
import javax.persistence.ColumnResult;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedNativeQuery;
import javax.persistence.NamedQuery;
import javax.persistence.SqlResultSetMapping;
import javax.persistence.Table;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
//@Table(name="BOILER_STATE")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//@EnableAutoConfiguration
//state_id, boiler_id, pressure, temperature


@NamedNativeQuery(
		  name = "selectLastN",
		  query = "SELECT * FROM Boiler_State b where b.boiler_id=:boilerId ORDER BY b.state_id DESC LIMIT :lastN",
		 resultClass = BoilerState.class )


@NamedQuery(name="selectQ", query = "from BoilerState where boilerId=:boilerId ")

public class BoilerState {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private Long stateId;
	
	
    public BoilerState() {
		super();
	}

	public BoilerState(Integer boilerId, Integer temperature, Integer pressure) {
		super();
		this.boilerId = boilerId;
		this.temperature = temperature;
		this.pressure = pressure;
	}

	@Column(name="boilerId")
	private Integer boilerId;
	
    @Column(name="temperature")
	private Integer temperature;
    
    @Override
	public String toString() {
		return "BoilerState [stateId=" + stateId + ", boilerId=" + boilerId + ", temperature=" + temperature
				+ ", pressure=" + pressure + "]";
	}

	@Column(name="pressure")
	private Integer pressure;


	public Long getStateId() {
		return stateId;
	}

	public void setStateId(Long stateId) {
		this.stateId = stateId;
	}

	public Integer getBoilerId() {
		return boilerId;
	}

	public void setBoilerId(Integer boilerId) {
		this.boilerId = boilerId;
	}

	public Integer getTemperature() {
		return temperature;
	}

	public void setTemperature(Integer temperature) {
		this.temperature = temperature;
	}

	public Integer getPressure() {
		return pressure;
	}

	public void setPressure(Integer pressure) {
		this.pressure = pressure;
	}

}
