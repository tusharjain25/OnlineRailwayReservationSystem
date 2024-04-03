import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/classes/passenger';
import { LoginService } from 'src/app/services/login.service';
import { PassengerService } from 'src/app/services/passenger.service';
import { Ticket } from '../../classes/ticket';
import { Train } from 'src/app/trains/classes/train';
import { TicketService } from '../../services/ticket.service';


@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  
  id!:any;
  passenger!: Passenger;
  // ticket!: Ticket; 
  // train!: Train;
  searchticketResults: Ticket[] = [];
  searchtrainResults: Train[] = [];
  
  constructor(private passengerService:PassengerService,
    private loginService:LoginService,
    private ticketService:TicketService){}

  ngOnInit(): void {
      this.id=this.loginService.getId();
      this.passenger = new Passenger();
      this.passengerService.getPassengerById(this.id).subscribe( (response:any) => {

        this.passenger = response;
        // console.log(this.passenger);

        this.searchticketResults=response.tickets;
        //console.log(this.searchticketResults);

        // for(let i=0; i<response.tickets.length; i++){
        //   this.ticket = response.tickets[i];
        // console.log(this.ticket);
        
        // this.train = response.tickets[i].trains;
        // console.log(this.train);

        // }

        for(let i=0; i<response.tickets.length; i++){
        this.searchtrainResults.push(response.tickets[i].trains);
       
        }
        console.log(this.searchtrainResults);
        

      },error=>{
        console.log(error);
      });
  }
  
  deleteTicket(id:number){
    const confirmation=confirm("Are you sure you want to Cancel this Ticket");
    if(confirmation){
      this.ticketService.deleteTicket(id).subscribe( data => {
        console.log(data);
        window.location.reload();
      })
    }
  }


}
