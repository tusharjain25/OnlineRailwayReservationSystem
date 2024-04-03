import { Component, OnInit } from '@angular/core';
import { Train } from '../../classes/train';
import { Router } from '@angular/router';
import { TrainService } from '../../services/train.service';

@Component({
  selector: 'app-create-train',
  templateUrl: './create-train.component.html',
  styleUrls: ['./create-train.component.css']
})
export class CreateTrainComponent implements OnInit {
train:Train=new Train();

constructor(private trainService: TrainService,
  private router:Router){}

ngOnInit(): void {
}

onSubmit(){
  console.log(this.train);
  this.saveTrain();
}

saveTrain(){
  this.trainService.createTrain(this.train).subscribe( data =>{
   // console.log(data);
    this.goToTrainList();
  },
  error => console.log(error));
}


goToTrainList(){
  this.router.navigate(['/trains']);
}


}
