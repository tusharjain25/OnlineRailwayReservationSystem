package com.sts.service;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.sts.model.Ticket;
import com.sts.model.Trains;
import com.sts.repository.TicketRepository;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

	@Autowired
    private TicketRepository ticketRepository;

	@Autowired
	private RestTemplate restTemplate;
	
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public List<Ticket> getTicketByPassengerId(int id) {
        return ticketRepository.findTicketById(id).orElse(null);
    }
    
    public Optional<Ticket> getTicketByTicketId(int id) {
        return ticketRepository.findById(id);
    }


    public Ticket bookTicket(Ticket ticket,int trainId,int id) throws Exception {
    	LocalDate date=LocalDate.now();
    	ticket.setBookedOn(date);
    	ticket.setTrainId(trainId);
    	ticket.setId(id);
    	 boolean seatsAvailable = checkSeatAvailability(ticket.getTrainId(), ticket.getRequiredSeats());
         if (seatsAvailable) {
             // Seats are available, book the ticket
             Ticket bookedTicket = ticketRepository.save(ticket);

             // Update seat count for the train
             updateTrainSeatCount(ticket.getTrainId(), ticket.getRequiredSeats());

             return bookedTicket;
         } else {
             // Seats are not available, handle the situation accordingly (e.g., throw an exception)
             throw new Exception("Seats are not available for this train.");
         }
        //return ticketRepository.save(ticket);
    }

    private boolean checkSeatAvailability(int trainId, int requiredSeats) {
        // Call Train micro service to check seat availability
    	Trains train=restTemplate.getForObject("http://TRAIN-DETAILS-SERVICE/trains/"+trainId,Trains.class);
        return train != null && train.getAvailableSeats() >= requiredSeats;
    }

    private void updateTrainSeatCount(int trainId, int bookedSeats) {
        // Call Train micro service to update seat count
    	Trains train = new Trains(); // Assuming you have a Trains object to send as the request body
    	String url = "http://TRAIN-DETAILS-SERVICE/trains/" + trainId + "/update-seats/" + bookedSeats;
    	Trains response = restTemplate.postForObject(url, train, Trains.class);
    	System.out.println(response);
    }

//    public TransactionDetails makePayment(int amount) {
//    	try {
//    		var client=new RazorpayClient("rzp_test_Yce6a2ka2wxYZ2","b5fyDiNZqGwHU7q1eSxs2nPK");
//        	
//        	JSONObject ob=new JSONObject();
//        	ob.put("amount",amount*100 );
//        	ob.put("currency","INR");
//        	ob.put("receipt", "txn_235425");
//        	
//        	Order order=client.orders.create(ob);
//        	//System.out.println(order);
//        	return prepareTransaction(order);
//           // return order.toString();
//    	}catch(Exception e) {
//    		System.out.println(e.getMessage());
//    	}
//		return null;
//    }
//    
//    public TransactionDetails prepareTransaction(Order order) {
//    	String orderId = order.get("id");
//    	String currency = order.get("currency");
//    	Integer amount =order.get("amount");
//    	String key="rzp_test_Yce6a2ka2wxYZ2";
//    	
//    	TransactionDetails transactionDetails=new TransactionDetails(orderId,currency,amount,key);
//    	return transactionDetails;
//    }
//    
    
    public Ticket updateTicket(int id, Ticket updatedTicket) {
        // Check if the ticket exists
        Ticket existingTicket = ticketRepository.findById(id).orElse(null);
        if (existingTicket == null) {
            return null; // Ticket not found
        }

        // Update fields of the existing ticket with the new values
        existingTicket.setId(updatedTicket.getId());
        existingTicket.setPassengerName(updatedTicket.getPassengerName());
        existingTicket.setTicketId(updatedTicket.getTicketId());
        existingTicket.setTrainId(updatedTicket.getTrainId());
        // Update other fields as needed
        existingTicket.setGender(updatedTicket.getGender());
        existingTicket.setEmail(updatedTicket.getEmail());
        existingTicket.setPhoneNo(updatedTicket.getPhoneNo());
        existingTicket.setRequiredSeats(updatedTicket.getRequiredSeats());
        existingTicket.setAge(updatedTicket.getAge());
        existingTicket.setBookedOn(updatedTicket.getBookedOn());

        return ticketRepository.save(existingTicket);
    }

    public void deleteTicket(int id) {
        ticketRepository.deleteById(id);
    }
    
//    public Ticket getTrainInfo(Ticket ticket,@PathVariable("id") int trainId) {
//    	Trains train= restTemplate.getForObject("http:/localhost:8082/trains/"+trainId, Trains.class);
//    	trainRepository.save(train);
//    	return new Ticket(ticket.getId(),ticket.getTicketNumber(),ticket.getPassengerName(),
//    			train.getTrainId(),train.getTrainName(),train.getTrainNumber(),
//    			train.getSource(),train.getDestination(),train.getFare(),ticket.getGender(),
//    			ticket.getEmail(),ticket.getPhoneNo(),ticket.getRequiredSeats(),
//    			ticket.getBookedOn(),ticket.getArrivalTime(),ticket.getDepartureTime());
//    }
}

