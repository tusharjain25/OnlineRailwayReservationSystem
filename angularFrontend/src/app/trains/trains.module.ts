import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainSearchComponent } from './components/train-search/train-search.component';
import { TrainDetailsComponent } from './components/train-details/train-details.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { TrainListComponent } from './components/train-list/train-list.component';
import { CreateTrainComponent } from './components/create-train/create-train.component';
import { UpdateTrainComponent } from './components/update-train/update-train.component';



@NgModule({
  declarations: [
    TrainSearchComponent,
    TrainDetailsComponent,
    SearchResultsComponent,
    TrainListComponent,
    CreateTrainComponent,
    UpdateTrainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TrainSearchComponent,
    TrainDetailsComponent,
    SearchResultsComponent,
    TrainListComponent,
    CreateTrainComponent,
    UpdateTrainComponent,
  ]
})
export class TrainsModule { }
