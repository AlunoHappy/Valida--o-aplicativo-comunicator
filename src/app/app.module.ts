import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
export const firebaseConfig = { 
  apiKey: "AIzaSyDY48XJgM2flLNKlfBw5-138BpW-pcwToY",
  authDomain: "comunicator-2a197.firebaseapp.com",
  databaseURL: "https://comunicator-2a197.firebaseio.com",
  projectId: "comunicator-2a197",
  storageBucket: "comunicator-2a197.appspot.com",
  messagingSenderId: "428543075700"
}; 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule 

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase, 
    AngularFireAuth, 
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
