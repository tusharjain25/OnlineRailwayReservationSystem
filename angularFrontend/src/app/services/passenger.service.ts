import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Passenger } from '../classes/passenger';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private baseUrl='http://localhost:8085/passengers';

  constructor(private http:HttpClient,private loginService:LoginService) { }

  getPassengersList(): Observable<Passenger[]>{
   // return this.http.get<Passenger[]>(this.baseUrl);
    return this.http.get<Passenger[]>(`${this.baseUrl}/viewall`);
  }

  

  getPassengerById(id: number): Observable<Passenger>{
    return this.http.get<Passenger>(`${this.baseUrl}/${id}`);
  }


  updatePassenger(id: number, passenger: Passenger): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, passenger);
  }

  deletePassenger(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
   
  

}
