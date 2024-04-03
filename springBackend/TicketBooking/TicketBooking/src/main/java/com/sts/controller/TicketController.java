package com.sts.controller;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import com.sts.model.Ticket;
import com.sts.service.TicketService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class TicketController {

	 @Autowired
    private TicketService ticketService;


    @GetMapping("/tickets")
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @GetMapping("/tickets/passengers/{id}")
    public List<Ticket> getTicketByPassengerId(@PathVariable int id) {
        return ticketService.getTicketByPassengerId(id);
    }

    
    @GetMapping("/tickets/{id}")
    public Optional<Ticket> getTicketByTicketId(@PathVariable int id) {
        return ticketService.getTicketByTicketId(id);
    }

    
    @PostMapping("/tickets/{trainId}/{id}")
    public Ticket bookTicket(@RequestBody Ticket ticket,@PathVariable int trainId,@PathVariable int id) throws Exception {
    	//ticket=ticketService.getTrainInfo(ticket,trainId);
        return ticketService.bookTicket(ticket,trainId,id);
    }
    
    
//    @GetMapping("/tickets/makePayment/{amount}")
//    public TransactionDetails makePayment(@PathVariable(name = "amount") int amount)  {
//    	
//    	return ticketService.makePayment(amount);
//    }

    
    @PutMapping("/tickets/{id}")
    public Ticket updateTicket(@PathVariable int id, @RequestBody Ticket ticket) {
        return ticketService.updateTicket(id, ticket);
    }

    @DeleteMapping("/tickets/{id}")
    public void deleteTicket(@PathVariable int id) {
        ticketService.deleteTicket(id);
    }
    
    
}

