import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Passenger } from 'src/app/classes/passenger';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  
  id!: number
  passenger!: Passenger

  constructor(private route: ActivatedRoute, private passengerService: PassengerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.passenger = new Passenger();
    this.passengerService.getPassengerById(this.id).subscribe( data => {
      this.passenger = data;
      //console.log(this.passenger);
    },error=>{
      console.log(error);
    });
  }
}
