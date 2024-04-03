import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketBookingComponent } from './components/ticket-booking/ticket-booking.component';
import { FormsModule } from '@angular/forms';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { UpdateTicketComponent } from './components/update-ticket/update-ticket.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';


@NgModule({
  declarations: [
    TicketBookingComponent,
    TicketDetailsComponent,
    TicketListComponent,
    CreateTicketComponent,
    UpdateTicketComponent,
    MyBookingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TicketBookingComponent,
    TicketDetailsComponent,
    TicketListComponent,
    CreateTicketComponent,
    UpdateTicketComponent,
    MyBookingsComponent
  ]
})
export class TicketModule { }
