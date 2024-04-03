package com.sts.service;


import java.util.Arrays;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.sts.model.Passenger;
import com.sts.model.Ticket;
import com.sts.model.Trains;
import com.sts.repository.PassengerRepository;

@Service
public class PassengerService {
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	 @Autowired
	 private PassengerRepository repository;

	 @Autowired
	 private RestTemplate restTemplate;
	 
//	 @Autowired
//	    private JwtService jwtService;
	 
	private Logger logger = LoggerFactory.getLogger(PassengerService.class);
	 
//	 public List<StudentInfo> getAllStudents(){
//		 List<StudentInfo> studentList=new ArrayList<>();
//		  repository.findAll()
//		  .forEach(studentList::add);
//			return studentList;
//	 }
//	    
//	 public void addinfo(StudentInfo studentInfo) {
//		 repository.save(studentInfo);
//	 }
//	
	 
	 public Passenger getPassengersById(int id) {
		 //get passenger from database using passenger repository.
		 Passenger passenger  =  repository.findById(id).get();
		 //fetch tickets of passenger from ticket booking service.
		 Ticket[] passengerTickets=restTemplate.getForObject("http://TICKET-BOOKING-SERVICE/tickets/passengers/"+passenger.getId(), Ticket[].class);
		
		 //logger.info("{} ", passengerTickets);
		 
		 List<Ticket> tickets = Arrays.stream(passengerTickets).toList();
		 List<Ticket> ticketList=tickets.stream().map(ticket->{
			 
			ResponseEntity<Trains> forEntity=restTemplate.getForEntity("http://TRAIN-DETAILS-SERVICE/trains/"+ticket.getTrainId(),Trains.class);
			Trains trains=forEntity.getBody();
			
			  logger.info("response status code: {} ",forEntity.getStatusCode());
			
			 //Trains trains=restTemplate.getForObject("http://localhost:8082/trains/"+ticket.getTrainId(),Trains.class);
			 
			 ticket.setTrains(trains);
			 return ticket;
		 }).collect(Collectors.toList());
		 
		 passenger.setTickets(ticketList);
		  return passenger;
	 }
	 
//	 public void updateStudentinfo(int studentid,StudentInfo studentInfo) {
//		 repository.save(studentInfo);
//	 }
	 
//	 public void deleteinfo(int studentid) {
//		 repository.deleteById(studentid);
//	 }
	 
//	 public void validateToken(String token,UserDetails userDetails) {
//	        jwtService.validateToken(token,userDetails);
//	    }
	 
	 
	 public String addUser(Passenger passenger) {
		 
		 passenger.setPassword(passwordEncoder.encode(passenger.getPassword()));
		 repository.save(passenger);
	        return "user added to database ";
	    }
}
