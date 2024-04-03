import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from '../../services/train.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  
  result:any;
  public loggedIn: boolean = false;

  constructor(private router: Router,private trainService:TrainService,
    private loginService:LoginService) {}

  ngOnInit():void {
    this.result=this.trainService.getResults();
    this.loggedIn=this.loginService.isLoggedIn();
  }

  bookTicket(id:number,fare:number){
    this.router.navigate(['book-ticket', id,fare]);
  }

  // onclick(){
  //   this.router.navigate(['my-bookings']);
  // }
}
