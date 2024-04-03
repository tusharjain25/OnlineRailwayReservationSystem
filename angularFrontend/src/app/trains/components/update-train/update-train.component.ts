import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Train } from '../../classes/train';
import { TrainService } from '../../services/train.service';

@Component({
  selector: 'app-update-train',
  templateUrl: './update-train.component.html',
  styleUrls: ['./update-train.component.css']
})
export class UpdateTrainComponent implements OnInit{
  id!:number;
  train:Train=new Train();

constructor(private route: ActivatedRoute, private trainService: TrainService,
  private router:Router) { }

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.trainService.getsingleTrainById(this.id).subscribe( data => {
    this.train = data;
    //console.log(this.train);
  }, error => console.log(error));
}

onSubmit(){
  this.trainService.updateTrain(this.id, this.train).subscribe( data =>{
    this.goToTrainList();
  }
  , error => console.log(error));
}

goToTrainList(){
  this.router.navigate(['/trains']);
}
}
