package com.sts.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;

import com.sts.model.*;

@Repository
public interface PaymentRepository extends MongoRepository<TransactionDetails, Integer> {

	

}
