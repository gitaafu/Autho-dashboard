import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';



import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [AppComponent,HomeComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-5je8pmo34iqgtwjf.us.auth0.com',
      clientId: 'XKSRarTzbDTfovmIByOAr1Bwf8rRAdxV',
      authorizationParams: {
        redirect_uri: window.location.origin 
      }
    }),],
  providers: [AuthService],
  bootstrap: [AppComponent]
})



export class AppModule { }


