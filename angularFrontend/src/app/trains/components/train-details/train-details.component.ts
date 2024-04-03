import { Component, OnInit } from '@angular/core';
import { Train } from '../../classes/train';
import { TrainService } from '../../services/train.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.css']
})
export class TrainDetailsComponent implements OnInit{

  id!:number;
  train:Train=new Train();

constructor(private route: ActivatedRoute, private trainService: TrainService) { }

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.trainService.getsingleTrainById(this.id).subscribe( data => {
    this.train = data;
    //console.log(this.train);
  }, error => console.log(error));
}
}
