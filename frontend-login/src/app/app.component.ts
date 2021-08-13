import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Patient } from './model/patient';
import { User } from './model/user';
import { AuthService } from './service/auth.service';
import { PatientService } from "./service/patient.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  loginStatus = false;
  userSub: Subscription = new Subscription();
  user: User | null = null;


  patients: Observable<Patient[]> = this.patientService.getAll();

  constructor(
    private patientService: PatientService,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.userSub = this.auth.currentUserSubject$.subscribe(
      user => this.user = user
    );
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }


}
