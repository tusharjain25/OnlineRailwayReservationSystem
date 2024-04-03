import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TrainService } from 'src/app/trains/services/train.service';

@Component({
  selector: 'app-public-result',
  templateUrl: './public-result.component.html',
  styleUrls: ['./public-result.component.css']
})
export class PublicResultComponent {
  result:any;
  public loggedIn: boolean = false;

  constructor(private router: Router,private trainService:TrainService,
    private loginService:LoginService) {}

  ngOnInit():void {
    this.result=this.trainService.getResults();
   // this.loggedIn=this.loginService.isLoggedIn();
  }

  // bookTicket(id:number){
  //   this.router.navigate(['book-ticket', id]);
  // }
}
