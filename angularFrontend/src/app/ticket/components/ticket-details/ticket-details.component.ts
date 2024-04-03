import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../classes/ticket';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  id!:number;
  ticket:Ticket=new Ticket();
  constructor(private route: ActivatedRoute, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ticketService.getsingleTicketById(this.id).subscribe( data => {
      this.ticket = data;
      //console.log(this.train);
    }, error => console.log(error));
  }
}
