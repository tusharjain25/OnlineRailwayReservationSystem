import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from '../../services/train.service';
import { Train } from '../../classes/train';

@Component({
  selector: 'app-train-search',
  templateUrl: './train-search.component.html',
  styleUrls: ['./train-search.component.css']
})
export class TrainSearchComponent implements OnInit {

  // traincredentials={
  //   source: '',
  //   destination: '',
  //   date:  '',
  // }
  today: Date = new Date();
  source: string = '';
  destination: string = '';
  trainNumber: string ='';
   //searchResults: Train[] = [];

  constructor(private router: Router,private trainService:TrainService) {}

  ngOnInit() {}
  
  fetchTrain(){
    if(this.trainNumber!=null && this.trainNumber!=''){
      this.trainService.getsingleTrainByTainNumber(this.trainNumber).subscribe(
        (response:any)=>{
          console.log(response);
          if(response==''){
            alert("no results found");
          }else{
          this.trainService.setResults(response);
          this.router.navigate(['/search-results'], { state: { response } });
          }
        },
        error=>{
          console.log(error);
        }
      )
    }else{
      alert("fields not set")
      console.log("fields are empty");
    }
  }



  searchTrains(){

    if((this.source !='' && this.destination !='') && (this.source!=null && this.destination!=null )){
      console.log("submit the data to the server");
      this.trainService.searchTrains(this.source, this.destination).subscribe(
        (response:any)=>{
          console.log(response);
          //this.searchResults = response;
          if(response==''){
            alert("no results found");
          }else{
          this.trainService.setResults(response);
          this.router.navigate(['/search-results'], { state: { response } });
          }
        },
       error=>{
         console.log(error);
       }
        
      )
    }
    else{
      alert("fields not set")
      console.log("fields are empty");
    }
  }
}
