import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username: '',
    password: '',
  }

  constructor(private loginService: LoginService,private snack:MatSnackBar){}

  ngOnInit(): void {
      
  }

  onSubmit(){
    
    if((this.credentials.username.trim() !='' && this.credentials.password !='') && (this.credentials.username!=null && this.credentials.password!=null)){
      console.log("submit the form to the server");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
         // console.log(response);
         // console.log(response.token);
         //console.log(response.passenger.roles);
          this.loginService.loginUser(response.token);
          this.loginService.setRoles(response.passenger.roles);
          this.loginService.setId(response.passenger.id);

          const roles = response.passenger.roles;
        if (roles === 'ROLE_ADMIN') {
          window.location.href="/admin-dashboard";
        } else {
          window.location.href="/dashboard";
        }
          
        },
       error=>{
         console.log(error);
         this.snack.open('Incorrect Username and Password!!' , '' , {duration: 3000});
       }
        
      )
    }else{
      console.log("fields are empty");
      this.snack.open('Fields are empty !!' , '' , {duration: 3000});
    }
  }
 
}
