import { Component } from '@angular/core';
import { Ticket } from '../../classes/ticket';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  tickets!:Ticket[];

  constructor(private router: Router,private ticketService:TicketService){}

  ngOnInit(): void {
    this.getTickets();
}

    getTickets(){
      this.ticketService.getTicketList().subscribe(data => {
        this.tickets = data;
      });
    }

  createTicket(){
    this.router.navigate(['create-ticket']);
  }

  updateTicket(id:number){
    this.router.navigate(['update-ticket', id]);
  }

  deleteTicket(id:number){
    const confirmation=confirm("Are you sure you want to delete this Ticket");
    if(confirmation){
      this.ticketService.deleteTicket(id).subscribe( data => {
        console.log(data);
        this.getTickets();
      })
    }
  }

  TicketDetails(id:number){
    this.router.navigate(['ticket-details',id]);
  }

}
