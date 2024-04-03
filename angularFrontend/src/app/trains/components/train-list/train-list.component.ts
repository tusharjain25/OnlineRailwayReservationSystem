import { Component, OnInit } from '@angular/core';
import { Train } from '../../classes/train';
import { Router } from '@angular/router';
import { TrainService } from '../../services/train.service';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css']
})
export class TrainListComponent implements OnInit {

  trains!:Train[];

  constructor(private router: Router,private trainService:TrainService){}

  ngOnInit(): void {
      this.getTrains();
  }

  getTrains(){
    this.trainService.getTrainList().subscribe(data => {
      this.trains = data;
    });
  }

  createTrain(){
    this.router.navigate(['create-train']);
   }

  updateTrain(trainId:number){
    this.router.navigate(['update-train', trainId]);
  }

  deleteTrain(trainId:number){
    const confirmation=confirm("Are you sure you want to delete this Train");
    if(confirmation){

      this.trainService.deleteTrain(trainId).subscribe( data => {
        console.log(data);
        this.getTrains();
      })
    }
  }

  TrainDetails(trainId:number){
    this.router.navigate(['train-details', trainId]);
  }
}
