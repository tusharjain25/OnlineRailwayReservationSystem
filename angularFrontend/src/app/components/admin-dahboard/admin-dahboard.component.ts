import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dahboard',
  templateUrl: './admin-dahboard.component.html',
  styleUrls: ['./admin-dahboard.component.css']
})
export class AdminDahboardComponent implements OnInit {
 
constructor(private router:Router){}

  ngOnInit(): void {
      
  }

  showPassengers(){
      this.router.navigate(['passengers']);
  }

  showTrains(){
    this.router.navigate(['trains']);
  }

  showTickets(){
    this.router.navigate(['tickets']);
  }
}
