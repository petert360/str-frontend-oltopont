import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { AdminComponent } from './page/admin/admin.component';
import { JwtInterceptorService } from './service/jwt-interceptor.service';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { PatientListComponent } from './page/patient-list/patient-list.component';
import { PlaceListComponent } from './page/place-list/place-list.component';
import { AdverseEventListComponent } from './page/adverse-event-list/adverse-event-list.component';
import { VaccinationListComponent } from './page/vaccination-list/vaccination-list.component';
import { VaccineListComponent } from './page/vaccine-list/vaccine-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    ForbiddenComponent,
    PatientListComponent,
    PlaceListComponent,
    AdverseEventListComponent,
    VaccinationListComponent,
    VaccineListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
