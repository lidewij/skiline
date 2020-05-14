import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/authentication-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
      public authService: AuthenticationService,
      public router: Router
  ) { }

  ngOnInit() {
  }

  // signUp(email, password){
  //   this.authService.RegisterUser(email.value, password.value)
  //       .then((res) => {
  //         // Do something here
  //       }).catch((error) => {
  //     window.alert(error.message);
  //   });
  // }

  signUp(email, password) {
    this.authService.RegisterUser(email.value, password.value)
        .then((res) => {
          // Do something here
            res.user.sendEmailVerification().then(() => {
                this.router.navigate(['verify-email']);
            });
           // this.authService.SendVerificationMail();
            this.router.navigate(['verify-email']);
        }).catch((error) => {
      window.alert(error.message);
    });
  }
}
