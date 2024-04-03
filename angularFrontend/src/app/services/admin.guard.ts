import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const loginService: LoginService =inject(LoginService );
  
      if(loginService.isLoggedIn() && loginService.getRoles()=='ROLE_ADMIN'){
         return true;
      }else{
      router.navigate(['login']);
      return false;
      }
};
