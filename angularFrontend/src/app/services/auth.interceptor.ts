import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        //add the jwt token from localstorage to the request
        let authRequest = req;
        const token = this.loginService.getToken();
        //console.log("inside interceptor");
        if(token!=null){
            authRequest=authRequest.clone({setHeaders: {Authorization:`Bearer ${token}`}})
        }
        return next.handle(authRequest);
    }

}   

export const authInterceptorProviders = [

{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
},

];