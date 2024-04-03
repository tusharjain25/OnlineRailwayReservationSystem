import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from 'src/app/classes/passenger';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {
  passengers!: Passenger[];
  
  constructor(private passengerService: PassengerService,
    private router: Router){}

  ngOnInit():void{
    this.getPassengers();
   //this.passengers=[{"id": 1, "username": "john", "email": "john@gmail.com", "password":"123","roles":"ROLE_ADMIN"}];
    //this.passengerService.getPassengersList().subscribe(data=>this.passengers = data);
  }

  private getPassengers(){
    this.passengerService.getPassengersList().subscribe(data => {
     // console.log(data);
      this.passengers = data;
    });
  }

  createPassenger(){
    this.router.navigate(['create-passenger']);
  }
  
  passengerDetails(id: number){
    this.router.navigate(['passenger-details', id]);
  }

  updatePassenger(id: number){
    this.router.navigate(['update-passenger', id]);
  }

  deletePassenger(id: number){
    const confirmation=confirm("Are you sure you want to delete this passenger");
    if(confirmation){

      this.passengerService.deletePassenger(id).subscribe( data => {
        console.log(data);
        this.getPassengers();
      })
    }
  }

}
