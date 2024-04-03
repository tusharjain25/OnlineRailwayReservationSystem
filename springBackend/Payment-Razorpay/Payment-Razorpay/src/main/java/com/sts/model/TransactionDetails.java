package com.sts.model;

//import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "payments")
public class TransactionDetails {

//	@Id
//	private int transactionId;
	
	private String orderId;
	private String currency;
	private Integer amount;
	private String key;
	
	
	
	public TransactionDetails() {
		
	}

	

	public TransactionDetails( String orderId, String currency, Integer amount, String key) {
		super();
	
		this.orderId = orderId;
		this.currency = currency;
		this.amount = amount;
		this.key = key;
	}



	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	
	
	
}
