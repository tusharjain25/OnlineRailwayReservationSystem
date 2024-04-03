package com.sts.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.sts.model.TransactionDetails;
import com.sts.service.PaymentService;

@RestController
@CrossOrigin(origins = "*")
public class PaymentController {
		
	@Autowired
	private PaymentService paymentService;
	
	@GetMapping("/makePayment/{amount}")
    public TransactionDetails makePayment(@PathVariable(name = "amount") int amount)  {
    	return paymentService.makePayment(amount);
    }
}
