import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from '../classes/passenger';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // requestHeader = new HttpHeaders({ 'No-Auth': 'True'});
  //  requestHeader = new HttpHeaders({
  //   'Access-Control-Allow-Origin': '*',
  //    'Content-Type': 'text',
  //   Authorization : `Bearer ${this.getToken()}`
  // });
  

  baseUrl='http://localhost:8085/auth';
  
  constructor(private http:HttpClient) { }

  generateToken(credentials:any) {
    // return this.http.post(`${this.baseUrl}/token`, credentials,{responseType: 'text'});
   //console.log(this.requestHeader)
   // return this.http.post(`${this.baseUrl}/token`, credentials,{headers:this.requestHeader});
    return this.http.post(`${this.baseUrl}/token`, credentials);
  }

  createPassenger(passenger: Passenger): Observable<Object>{
    return this.http.post(`${this.baseUrl}/register`, passenger,{responseType: 'text'});
  }

  loginUser(token: any){
      localStorage.setItem("token", token);
      return true;
  }

  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  logout(){
    // localStorage.removeItem("token");
    // localStorage.removeItem("roles");
    localStorage.clear();
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }

  setRoles(roles: any) {
    localStorage.setItem("roles", roles);
    return true;
  }

  getRoles() {
    
    return localStorage.getItem("roles");
    
  }

  getId(){
    return localStorage.getItem("id");
  }

  setId(id:any){
    localStorage.setItem("id", id);
    return true;
 }
 
  
 public isAdmin() {
  const roles: any = this.getRoles();
  return roles === 'ROLE_ADMIN';
}

public isUser() {
  const roles: any = this.getRoles();
  return roles === 'ROLE_USER';
}
}
