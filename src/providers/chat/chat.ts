import { HttpClient } from '@angular/common/http'; 

import { Injectable } from '@angular/core'; 

import { AngularFireDatabase } from 'angularfire2/database'; 

 

/* 

  Generated class for the ChatProvider provider. 

 

  See https://angular.io/guide/dependency-injection for more info on providers 

  and Angular DI. 

*/ 

@Injectable() 

export class ChatProvider { 

 

  constructor( 

    private db: AngularFireDatabase 

  ) { 

    console.log('Hello ChatProvider Provider'); 

  } 
  saveMessage(message){ 

    return new Promise((resolve, reject) => { 

      this.db.database.ref("chat").push(message, (err) => { 

        if(err){ 

          reject(err); 

        } 

 

        resolve(); 

      }); 

    }) 

  } 
 

} 
