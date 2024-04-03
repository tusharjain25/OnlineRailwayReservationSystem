package com.sts.service;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.sts.model.Trains;
import com.sts.repository.TrainRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TrainService {
	
	@Autowired
    private  TrainRepository trainRepository;
	
    
	public List<Trains> findTrainsBySourceAndDestination(String source, String destination) {
        return trainRepository.findBySourceAndDestination(source, destination);
    }
	
    public List<Trains> getAllTrains() {
        return trainRepository.findAll();
    }

    public Optional<Trains> getTrainById(int trainId) {
        return trainRepository.findById(trainId);
    }

    public List<Trains> getTrainByTrainNumber(int trainNumber) {
        return trainRepository.findByTrainNumber(trainNumber);
    }
    
    public Trains saveTrain(Trains train) {
        return trainRepository.save(train);
    }

    public void deleteTrain(int trainId) {
        trainRepository.deleteById(trainId);
    }
    
    
}
