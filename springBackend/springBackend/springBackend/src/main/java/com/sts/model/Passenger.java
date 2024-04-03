package com.sts.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name = "passengers")
public class Passenger {
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	 	private int id;
	    private String username;
	    private String email;
	    private String password;
	    private String roles;
	    
	    @Transient
	    private List<Ticket> tickets=new ArrayList<>();
	    
	    
	    public Passenger() {
	    	
	    }


		public Passenger(int id, String username, String email, String password, String roles, List<Ticket> tickets) {
			super();
			this.id = id;
			this.username = username;
			this.email = email;
			this.password = password;
			this.roles = roles;
			this.tickets = tickets;
		}


		public int getId() {
			return id;
		}


		public void setId(int id) {
			this.id = id;
		}


		public String getUsername() {
			return username;
		}


		public void setUsername(String username) {
			this.username = username;
		}


		public String getEmail() {
			return email;
		}


		public void setEmail(String email) {
			this.email = email;
		}


		public String getPassword() {
			return password;
		}


		public void setPassword(String password) {
			this.password = password;
		}


		public String getRoles() {
			return roles;
		}


		public void setRoles(String roles) {
			this.roles = roles;
		}


		public List<Ticket> getTickets() {
			return tickets;
		}


		public void setTickets(List<Ticket> tickets) {
			this.tickets = tickets;
		}
	    
		
}
