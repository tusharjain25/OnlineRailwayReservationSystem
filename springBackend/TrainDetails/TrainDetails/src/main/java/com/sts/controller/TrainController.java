package com.sts.controller;

import java.time.LocalDateTime;
import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sts.model.Trains;
import com.sts.repository.TrainRepository;
import com.sts.service.TrainService;

@RestController
@CrossOrigin(origins = "*")
public class TrainController {

	@Autowired
	private TrainRepository trainRepository;
	
	@Autowired
	 private  TrainService trainService;
	
	 @GetMapping("/trains")
	    public List<Trains> getAllTrains() {
	        return trainService.getAllTrains();
	    }

	    @GetMapping("/trains/{trainId}")
	    public Optional<Trains> getTrainById(@PathVariable int trainId) {
	        return trainService.getTrainById(trainId);
	    }
	    
	    @GetMapping("/trains/number/{trainNumber}")
	    public List<Trains> getTrainByTrainNumber(@PathVariable int trainNumber) {
	        return trainService.getTrainByTrainNumber(trainNumber);
	    }
	    
	    @PostMapping("/trains")
	    public Trains saveTrain(@RequestBody Trains train) {
	    	
	    	LocalDateTime time=LocalDateTime.now();
	    	train.setArrivalTime(time);
	    	train.setDepartureTime(time);
	        return trainService.saveTrain(train);
	    }

	    @PostMapping("/trains/{trainId}/update-seats/{bookedSeats}")
	    public void updateTrainSeatCount(@PathVariable int trainId,@PathVariable int bookedSeats) {
	        // Implement logic to update the available seat count for the train
	        // This could be done using JPA, JDBC, or any other data access method
	        // Here's an example using JPA repository:
	         Trains train = trainRepository.findById(trainId).orElse(null);
	         if (train != null) {
	             int currentAvailableSeats = train.getAvailableSeats();
	             if (currentAvailableSeats >= bookedSeats) {
	                 train.setAvailableSeats(currentAvailableSeats - bookedSeats);
	                 trainRepository.save(train);
	             } else {
	                 // Handle seat unavailability
	             }
	         }

	        // For demonstration purposes, let's simulate the update
	        System.out.println("Simulating seat count update for train " + trainId);
	        System.out.println("Booked " + bookedSeats + " seats.");
	        System.out.println("Updating available seat count.");
	    }
	    
	    // Endpoint to update train details
	    @PutMapping("/trains/{trainId}")
	    public Trains updateTrain(@PathVariable int trainId, @RequestBody Trains updatedTrain) {
	    	
	    	 Trains existingTrain = trainRepository.findById(trainId).get();
	         // Update the existing train with data from updatedTrain
	         existingTrain.setTrainName(updatedTrain.getTrainName());
	         existingTrain.setTrainNumber(updatedTrain.getTrainNumber());
	         existingTrain.setSource(updatedTrain.getSource());
	         existingTrain.setDestination(updatedTrain.getDestination());
	         existingTrain.setFare(updatedTrain.getFare());
	         existingTrain.setArrivalTime(updatedTrain.getArrivalTime());
	         existingTrain.setDepartureTime(updatedTrain.getDepartureTime());
	         existingTrain.setAvailableSeats(updatedTrain.getAvailableSeats());
	         return trainRepository.save(existingTrain);
	    }
	    
	    
	    @DeleteMapping("/trains/{trainId}")
	    public void deleteTrain(@PathVariable int trainId) {
	        trainService.deleteTrain(trainId);
	    }
	    
	 // Endpoint to find trains by source and destination
//	    @PostMapping("/trains/search-train")
//	    public List<Trains> findTrainsBySourceAndDestination(@RequestBody Trains trains) {
//	        return trainService.findTrainsBySourceAndDestination(trains.getSource(), trains.getDestination());
//	    }

	    @GetMapping("/trains/search-train/{source}/{destination}")
	    public List<Trains> findTrainsBySourceAndDestination(@PathVariable String source,@PathVariable String destination) {
	        return trainService.findTrainsBySourceAndDestination(source,destination);
	    }
	    
}
