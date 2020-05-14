import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SocketIoModule} from 'ngx-socket-io';
import {SliderComponentComponent} from './components/slider-component/slider-component.component';
import {StartGameComponent} from './components/start-game/start-game.component';
import {NgCircleProgressModule} from 'ng-circle-progress';

import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';


@NgModule({
  declarations: [
      AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SocketIoModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestoreModule,
    SliderComponentComponent,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  exports: [
      AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
