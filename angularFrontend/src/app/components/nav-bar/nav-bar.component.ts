import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn: boolean = false;
 

   constructor(private loginService:LoginService,private router:Router,
    private passengerService:PassengerService){}

  ngOnInit(): void {
      this.loggedIn=this.loginService.isLoggedIn();
     
  }
    

  public isAdmin() {
    return this.loginService.isAdmin();
  }

  public isUser() {
    return this.loginService.isUser();
  }


  logoutUser(){
    this.loginService.logout();
    location.reload();
     this.router.navigate(['/login']);
    
  }

 
}
