import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatePassengerComponent } from './components/create-passenger/create-passenger.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component';
import { UpdatePassengerComponent } from './components/update-passenger/update-passenger.component';
import { TrainsModule } from './trains/trains.module';
import { TicketModule } from './ticket/ticket.module';
import { PublicSearchComponent } from './components/public-search/public-search.component';
import { PublicResultComponent } from './components/public-result/public-result.component';
import { RouterModule } from '@angular/router';
import { AdminDahboardComponent } from './components/admin-dahboard/admin-dahboard.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    CreatePassengerComponent,
    PassengerDetailsComponent,
    PassengerListComponent,
    UpdatePassengerComponent,
    PublicSearchComponent,
    PublicResultComponent,
    AdminDahboardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    TrainsModule,
    TicketModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
