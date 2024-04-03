package com.sts.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sts.model.Trains;

@Repository
public interface TrainRepository extends JpaRepository<Trains, Integer>{
	List<Trains> findBySourceAndDestination(String source, String destination);
	List<Trains> findByTrainNumber(int trainNumber);
}
