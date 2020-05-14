import { Component, OnInit } from '@angular/core';
import {FirebaseAuthentication} from '@ionic-native/firebase-authentication/ngx';
import {AuthenticationService} from '../shared/authentication-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
        .then((res) => {
          if(this.authService.isEmailVerified) {
            this.router.navigate(['/']);
          } else {
            window.alert('Email is not verified');
            return false;
          }
        }).catch((error) => {
      window.alert(error.message);
    });
  }

}
