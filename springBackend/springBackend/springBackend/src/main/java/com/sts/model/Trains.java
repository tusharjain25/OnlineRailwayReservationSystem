package com.sts.model;

import java.time.LocalDateTime;

public class Trains {
 
	
 	private int trainId;
	private int trainNumber;
	private String trainName;
    private String source;
    private String destination;
    private int fare;
    private int noOfSeats;
    private LocalDateTime departureTime;
    private LocalDateTime arrivalTime;
    
    public Trains() {
    	
    }

    public Trains(int trainId, int trainNumber, String trainName, String source, String destination, int fare,
			int noOfSeats, LocalDateTime departureTime, LocalDateTime arrivalTime) {
		super();
		this.trainId = trainId;
		this.trainNumber = trainNumber;
		this.trainName = trainName;
		this.source = source;
		this.destination = destination;
		this.fare = fare;
		this.noOfSeats = noOfSeats;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
	}
    
	public int getTrainId() {
		return trainId;
	}

	public void setTrainId(int trainId) {
		this.trainId = trainId;
	}

	public int getTrainNumber() {
		return trainNumber;
	}

	public void setTrainNumber(int trainNumber) {
		this.trainNumber = trainNumber;
	}

	public String getTrainName() {
		return trainName;
	}

	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public int getFare() {
		return fare;
	}

	public void setFare(int fare) {
		this.fare = fare;
	}

	public LocalDateTime getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(LocalDateTime departureTime) {
		this.departureTime = departureTime;
	}

	public LocalDateTime getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(LocalDateTime arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public int getNoOfSeats() {
		return noOfSeats;
	}

	public void setNoOfSeats(int noOfSeats) {
		this.noOfSeats = noOfSeats;
	}

	
}
