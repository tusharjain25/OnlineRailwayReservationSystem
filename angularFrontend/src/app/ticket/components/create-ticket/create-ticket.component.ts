import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ticket } from '../../classes/ticket';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  ticket: Ticket=new Ticket();
  trainId!:'';
  id!:'';
  
constructor(private ticketService:TicketService,
  private router:Router){}

ngOnInit(): void {
}

onSubmit(){
  console.log(this.ticket);
  this.saveTicket(this.ticket,this.trainId,this.id);
}

saveTicket(ticket:Ticket,trainId:any,id:any){
  this.ticketService.createTicket(ticket,trainId,id).subscribe( data =>{
   // console.log(data);
    this.goToTicketList();
  },
  error => console.log(error));
}


goToTicketList(){
  this.router.navigate(['/tickets']);
}
}
