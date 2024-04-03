package com.sts.model;

import java.time.LocalDate;

public class Ticket {
	
	
    private int ticketId;
	private int id;
	private int trainId;
    private String passengerName;
    private String gender;
    private String email;
    private String phoneNo;
    private int age;
    private int requiredSeats;
    private LocalDate bookedOn;
    
    private Trains trains;
    
	public Ticket() {
		
	}


	public Ticket(int ticketId, int id, int trainId, String passengerName, String gender, String email, String phoneNo,
			int age, int requiredSeats, LocalDate bookedOn, Trains trains) {
		super();
		this.ticketId = ticketId;
		this.id = id;
		this.trainId = trainId;
		this.passengerName = passengerName;
		this.gender = gender;
		this.email = email;
		this.phoneNo = phoneNo;
		this.age = age;
		this.requiredSeats = requiredSeats;
		this.bookedOn = bookedOn;
		this.trains = trains;
	}



	public int getTicketId() {
		return ticketId;
	}

	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	
	public int getTrainId() {
		return trainId;
	}


	public void setTrainId(int trainId) {
		this.trainId = trainId;
	}


	public String getPassengerName() {
		return passengerName;
	}

	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getRequiredSeats() {
		return requiredSeats;
	}

	public void setRequiredSeats(int requiredSeats) {
		this.requiredSeats = requiredSeats;
	}

	public LocalDate getBookedOn() {
		return bookedOn;
	}

	public void setBookedOn(LocalDate bookedOn) {
		this.bookedOn = bookedOn;
	}

	public Trains getTrains() {
		return trains;
	}

	public void setTrains(Trains trains) {
		this.trains = trains;
	}

	
}
