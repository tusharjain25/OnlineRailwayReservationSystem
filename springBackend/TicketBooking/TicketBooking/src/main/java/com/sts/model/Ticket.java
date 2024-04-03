package com.sts.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ticket")
public class Ticket {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
	    private String transactionId;
    
    
	public Ticket() {
		
	}


	public Ticket(int ticketId, int id, int trainId, String passengerName, String gender, String email, String phoneNo,
			int age, int requiredSeats, LocalDate bookedOn, String transactionId) {
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
		this.transactionId = transactionId;
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


	public String getTransactionId() {
		return transactionId;
	}


	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}

	
	
}
