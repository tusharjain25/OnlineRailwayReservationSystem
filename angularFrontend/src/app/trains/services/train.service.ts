import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Train } from '../classes/train';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class TrainService {
 
  sharedResult:any;

  baseUrl='http://localhost:8085/trains';
  
  constructor(private http:HttpClient) { }

  // searchTrains(source: string, destination: string){
  //   const body = { source, destination };
  //   return this.http.post(`${this.baseUrl}/trains/search-train`, body,{responseType: 'text'});
  // }

  searchTrains(source: string, destination: string){
    return this.http.get<Train>(`${this.baseUrl}/search-train/${source}/${destination}`);
  }
 
  getsingleTrainByTainNumber(trainNumber: string): Observable<Train>{
    return this.http.get<Train>(`${this.baseUrl}/number/${trainNumber}`);
  }

  setResults(data:any){
    this.sharedResult=data;
  }
  getResults(){
    return this.sharedResult;
  }

  getsingleTrainById(trainId: number): Observable<Train>{
    return this.http.get<Train>(`${this.baseUrl}/${trainId}`);
  }

  getTrainList():Observable<Train[]>{
    return this.http.get<Train[]>(`${this.baseUrl}`);
  }

  createTrain(train:Train): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, train);
  }

  updateTrain(trainId: number, train:Train): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${trainId}`,train);
  }

  deleteTrain(trainId: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${trainId}`);
  }
}
