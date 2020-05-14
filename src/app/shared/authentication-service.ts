import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {User} from './user';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    userData: any;

    constructor(
        public afStore: AngularFirestore,
        public ngFireAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone
    ) {
        this.ngFireAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            } else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }

    // Login in with email/password
    SignIn(email, password) {
        return this.ngFireAuth.signInWithEmailAndPassword(email, password);
    }

    // Register user with email/password
    RegisterUser(email, password) {
        return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
    }

    // Email verification when new user register
    // SendVerificationMail() {
    //     return this.ngFireAuth.currentUser.sendEmailVerification()
    //         .then(() => {
    //             this.router.navigate(['verify-email']);
    //         });
    // }

    // Recover password
    PasswordRecover(passwordResetEmail) {
        return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                window.alert('Password reset email has been sent, please check your inbox.');
            }).catch((error) => {
                window.alert(error);
            });
    }

    // Returns true when user is looged in
    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false) ? true : false;
    }

    // Returns true when user's email is verified
    get isEmailVerified(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user.emailVerified !== false) ? true : false;
    }

    // Sign in with Gmail
    GoogleAuth() {
        return this.AuthLogin(new auth.GoogleAuthProvider());
    }

    // Auth providers
    AuthLogin(provider) {
        return this.ngFireAuth.signInWithPopup(provider)
            .then((result) => {
                this.ngZone.run(() => {
                    this.router.navigate(['/']);
                });
                this.SetUserData(result.user);
            }).catch((error) => {
                window.alert(error);
            });
    }

    // Store user in localStorage
    SetUserData(user) {
        const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    }

    // Sign-out
    SignOut() {
        return this.ngFireAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['login']);
        });
    }

}
