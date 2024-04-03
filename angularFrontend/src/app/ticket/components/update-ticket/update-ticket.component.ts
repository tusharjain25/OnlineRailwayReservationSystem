import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../classes/ticket';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {
  id!:number;
  ticket :Ticket=new Ticket();

constructor(private route: ActivatedRoute, private ticketService: TicketService,
  private router:Router) { }

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.ticketService.getsingleTicketById(this.id).subscribe( data => {
    this.ticket = data;
    //console.log(this.ticket);
  }, error => console.log(error));
}

onSubmit(){
  this.ticketService.updateTicket(this.id, this.ticket).subscribe( data =>{
    this.goToTicketList();
  }
  , error => console.log(error));
}

goToTicketList(){
  this.router.navigate(['/tickets']);
}
}
