import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component';
import { CreatePassengerComponent } from './components/create-passenger/create-passenger.component';
import { UpdatePassengerComponent } from './components/update-passenger/update-passenger.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { TrainDetailsComponent } from './trains/components/train-details/train-details.component';
import { SearchResultsComponent } from './trains/components/search-results/search-results.component';
import { TicketBookingComponent } from './ticket/components/ticket-booking/ticket-booking.component';
import { PublicResultComponent } from './components/public-result/public-result.component';
import { TicketDetailsComponent } from './ticket/components/ticket-details/ticket-details.component';
import { AdminDahboardComponent } from './components/admin-dahboard/admin-dahboard.component';
import { TrainListComponent } from './trains/components/train-list/train-list.component';
import { TicketListComponent } from './ticket/components/ticket-list/ticket-list.component';
import { CreateTrainComponent } from './trains/components/create-train/create-train.component';
import { UpdateTrainComponent } from './trains/components/update-train/update-train.component';
import { MyBookingsComponent } from './ticket/components/my-bookings/my-bookings.component';
import { CreateTicketComponent } from './ticket/components/create-ticket/create-ticket.component';
import { UpdateTicketComponent } from './ticket/components/update-ticket/update-ticket.component';
import { adminGuard } from './services/admin.guard';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path:'login',component: LoginComponent,pathMatch:'full'},
  { path:'signup',component: SignupComponent,pathMatch:'full'},
  { path:'home',component: HomeComponent,pathMatch:'full'},
  { path:'about',component:AboutComponent ,pathMatch:'full'},
  { path:'',redirectTo: 'home',pathMatch:'full'},

  { path:'dashboard',component: DashboardComponent,pathMatch:'full',canActivate:[authGuard]},
  { path:'admin-dashboard',component: AdminDahboardComponent,pathMatch:'full',canActivate:[adminGuard]},

  { path: 'passengers',component:PassengerListComponent,pathMatch:'full',canActivate:[adminGuard]},
  { path:'trains',component:TrainListComponent,pathMatch:'full',canActivate:[adminGuard]},
  { path:'tickets',component:TicketListComponent,pathMatch:'full',canActivate:[adminGuard]},

  { path:'create-passenger',component: CreatePassengerComponent,pathMatch:'full'},
  { path:'update-passenger/:id',component: UpdatePassengerComponent ,pathMatch:'full',canActivate:[adminGuard]},
  { path:'passenger-details/:id',component:PassengerDetailsComponent ,pathMatch:'full',canActivate:[adminGuard]},
  
  { path:'create-train',component: CreateTrainComponent,pathMatch:'full',canActivate:[adminGuard]},
  { path:'update-train/:id',component: UpdateTrainComponent ,pathMatch:'full',canActivate:[adminGuard]},
  { path:'train-details/:id',component: TrainDetailsComponent,pathMatch:'full',canActivate:[adminGuard]},
  { path: 'search-results', component: SearchResultsComponent ,pathMatch:'full',canActivate:[authGuard]},
  { path:'public-result',component: PublicResultComponent,pathMatch:'full'},
 
  { path:'my-bookings',component: MyBookingsComponent,pathMatch:'full',canActivate:[authGuard]},
  { path:'create-ticket',component: CreateTicketComponent,pathMatch:'full',canActivate:[authGuard]},
  { path:'ticket-details/:id',component: TicketDetailsComponent,pathMatch:'full',canActivate:[adminGuard]},
  { path: 'book-ticket/:id/:fare',component: TicketBookingComponent,pathMatch:'full',canActivate:[authGuard]},
  { path:'update-ticket/:id',component: UpdateTicketComponent,pathMatch:'full',canActivate:[adminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
