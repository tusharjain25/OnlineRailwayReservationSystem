import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from 'src/app/classes/passenger';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-create-passenger',
  templateUrl: './create-passenger.component.html',
  styleUrls: ['./create-passenger.component.css']
})
export class CreatePassengerComponent implements OnInit {
  passenger:Passenger=new Passenger();

  constructor(private loginService: LoginService,
    private router:Router){}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.passenger);
    this.savePassenger();
  }
  
  savePassenger(){
    this.loginService.createPassenger(this.passenger).subscribe( data =>{
      console.log(data);
      this.goToPassengerList();
    },
    error => console.log(error));
  }

  
  goToPassengerList(){
    this.router.navigate(['/passengers']);
  }

  
}
