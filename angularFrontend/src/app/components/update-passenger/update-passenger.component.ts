import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passenger } from 'src/app/classes/passenger';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-update-passenger',
  templateUrl: './update-passenger.component.html',
  styleUrls: ['./update-passenger.component.css']
})
export class UpdatePassengerComponent implements OnInit {
  id!: number;
  passenger: Passenger = new Passenger();
  
  constructor(private passengerService: PassengerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.passengerService.getPassengerById(this.id).subscribe(data => {
      this.passenger = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.passengerService.updatePassenger(this.id, this.passenger).subscribe( data =>{
      this.goToPassengerList();
    }
    , error => console.log(error));
  }

  goToPassengerList(){
    this.router.navigate(['/passengers']);
  }
}
