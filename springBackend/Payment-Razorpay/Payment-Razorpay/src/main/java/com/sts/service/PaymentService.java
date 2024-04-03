package com.sts.service;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.sts.model.TransactionDetails;
import com.sts.repository.PaymentRepository;

@Service
public class PaymentService {
	
	@Autowired
	private PaymentRepository paymentRepository;
	
	 public TransactionDetails makePayment(int amount) {
	    	try {
	    		var client=new RazorpayClient("rzp_test_Yce6a2ka2wxYZ2","b5fyDiNZqGwHU7q1eSxs2nPK");
	        	
	        	JSONObject ob=new JSONObject();
	        	ob.put("amount",amount*100 );
	        	ob.put("currency","INR");
	        	ob.put("receipt", "txn_235425");
	        	
	        	Order order=client.orders.create(ob);
	        	//System.out.println(order);
	        	
	        	return prepareTransaction(order);
	        	
	           // return order.toString();
	    	}catch(Exception e) {
	    		System.out.println(e.getMessage());
	    	}
			return null;
	    }
	    
	    public TransactionDetails prepareTransaction(Order order) {
	    	String orderId = order.get("id");
	    	String currency = order.get("currency");
	    	Integer amount =order.get("amount");
	    	String key="rzp_test_Yce6a2ka2wxYZ2";
	    	
	    	TransactionDetails transactionDetails=new TransactionDetails(orderId,currency,amount,key);
	    	paymentRepository.save(transactionDetails);
	    	return transactionDetails;
	    }
	    
}
