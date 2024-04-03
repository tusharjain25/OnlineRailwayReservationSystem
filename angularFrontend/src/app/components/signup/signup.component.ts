import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Passenger } from 'src/app/classes/passenger';
import { LoginService } from 'src/app/services/login.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  passenger:Passenger=new Passenger();

  constructor(private loginService: LoginService,private snack:MatSnackBar,
    private router:Router){}

  ngOnInit(): void {
  }

  savePassenger(){
    if(this.passenger.username=='' || this.passenger.username==null){
      //alert("username is required")
      this.snack.open('Username is required !!' , '' , {duration: 3000});
      return;
    }
    this.loginService.createPassenger(this.passenger).subscribe( data =>{
      console.log(data);
      swal("Done !!","Passenger registered successfully","success")
      this.goToPassengerList();
    },
    error => {
      console.log(error)
      this.snack.open('Something went wrong !!' , '' , {duration: 3000});
    });
  }

  
  goToPassengerList(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
    // console.log(this.passenger);
    this.savePassenger();
  }
}
