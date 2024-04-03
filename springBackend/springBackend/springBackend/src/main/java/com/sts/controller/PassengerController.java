package com.sts.controller;

import java.util.HashMap;




import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.sts.config.UserInfoUserDetailsService;
import com.sts.model.AuthRequest;
import com.sts.model.AuthResponse;
import com.sts.model.Passenger;
import com.sts.repository.PassengerRepository;
import com.sts.service.PassengerService;

import com.sts.service.JwtService;

@RestController
@CrossOrigin(origins = "*")
public class PassengerController {


	@Autowired
	private PassengerService service;
	
	 @Autowired 
	  private JwtService jwtService;
	    
	  @Autowired
	   private AuthenticationManager authenticationManager;
	
	@Autowired
	private PassengerRepository passengerRepository;
	
	@Autowired
	private UserInfoUserDetailsService userInfoUserDetailsService;
	
	// get all passengers
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	@GetMapping("/passengers/viewall")
	public List<Passenger> getAllPassengers(){
		return passengerRepository.findAll();
	}
	
	
	// get passenger by id rest api
	@GetMapping("/passengers/{id}")
	public ResponseEntity<Passenger> getPassengerById(@PathVariable int id) {
		Passenger passenger = service.getPassengersById(id);
			return ResponseEntity.ok(passenger);
		}	
	
	// update passenger rest api
	
		@PutMapping("/passengers/{id}")
		public ResponseEntity<Passenger> updatePassenger(@PathVariable int id, @RequestBody Passenger passengerDetails){
			Passenger passenger = passengerRepository.findById(id).get();
		
			passenger.setUsername(passengerDetails.getUsername());
			passenger.setEmail(passengerDetails.getEmail());
			
			Passenger updatedPassenger = passengerRepository.save(passenger);
			return ResponseEntity.ok(updatedPassenger);
		}
		
	
	// delete passenger rest api
		@DeleteMapping("/passengers/{id}")
		public ResponseEntity<Map<String, Boolean>> deletePassenger(@PathVariable int id){
			//Optional<Passenger> passenger = passengerRepository.findById(id);
			//passengerRepository.delete(passenger);
			passengerRepository.deleteById(id);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
//		 @GetMapping("/auth/validate")
//		    public String validateToken(@RequestParam("token") String token,UserDetails userDetails) {
//		        service.validateToken(token,userDetails);
//		        return "Token is valid";
//		    }
	
		// create passenger rest api
				@PostMapping("/auth/register")
				public String createPassenger(@RequestBody  Passenger passenger) {
					return service.addUser(passenger);
				}
				
		
		 @PostMapping("/auth/token")
		  public AuthResponse authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
		     Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
		     	if (authentication.isAuthenticated()) {
			        //return jwtService.generateToken(authRequest.getUsername());
		    	 UserDetails userDetails=userInfoUserDetailsService.loadUserByUsername(authRequest.getUsername());
		    	  String token = this.jwtService.generateToken(userDetails);
		    	 // System.out.println(token);
		    	  
		    	  Passenger passenger=passengerRepository.findByUsername(authRequest.getUsername()).get();
		     	 return new AuthResponse(passenger,token);
		     	}
		     	else {
			        throw new UsernameNotFoundException("invalid user request !");
			    } 	
		  }
		 
//		  @PostMapping("/token")
//		  public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
//		     Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
//		     if (authentication.isAuthenticated()) {
//			        return jwtService.generateToken(authRequest.getUsername());
//			    } else {
//			        throw new UsernameNotFoundException("invalid user request !");
//			    }
	//
//			 }
			
		
}
