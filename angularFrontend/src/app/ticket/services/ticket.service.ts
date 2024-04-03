import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../classes/ticket';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl='http://localhost:8085/tickets';

  constructor(private http:HttpClient) { }

  bookTicket(ticket:any,trainId:any,id:any): Observable<Object>{
    return this.http.post(`${this.baseUrl}/${trainId}/${id}`,ticket);
    
  }

  createTransaction(amount:any){
    return this.http.get('http://localhost:8083/makePayment/'+amount);
  }

  getsingleTicketById(id: number): Observable<Ticket>{
    return this.http.get<Ticket>(`${this.baseUrl}/${id}`);
  }

  // getTicketsbyPassengerId(id:any){
  //   return this.http.get(`${this.baseUrl}/passengers/${id}`);
  // }

  getTicketList(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${this.baseUrl}`);
  }

  createTicket(ticket:Ticket,trainId:number,id:number): Observable<Object>{
    return this.http.post(`${this.baseUrl}/${trainId}/${id}`,ticket);
  }

  updateTicket(id: number,ticket:Ticket): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,ticket);
  }


  deleteTicket(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  

}
