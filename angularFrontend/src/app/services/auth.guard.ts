import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state:RouterStateSnapshot) => {
 
  const router: Router = inject(Router);
  const loginService: LoginService =inject(LoginService );
  
      if(loginService.isLoggedIn() && loginService.getRoles()=='ROLE_USER'){
         return true;
      }else{
      router.navigate(['login']);
      return false;
      }
};
