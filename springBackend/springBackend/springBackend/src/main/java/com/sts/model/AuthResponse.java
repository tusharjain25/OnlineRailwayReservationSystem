package com.sts.model;

public class AuthResponse {
	
	private Passenger passenger;
	private String token;
	
	public AuthResponse() {
		
	}

	public AuthResponse(Passenger passenger, String token) {
		super();
		this.passenger = passenger;
		this.token = token;
	}

	public Passenger getPassenger() {
		return passenger;
	}

	public void setPassenger(Passenger passenger) {
		this.passenger = passenger;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	
}
