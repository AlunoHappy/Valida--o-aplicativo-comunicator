import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat'; 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  [x: string]: any;

  public model = { 
    message: "" 
  }; 

  constructor(public navCtrl: NavController, private chatProvider: ChatProvider ) {

  }
  sendMessage(){ 
    var message = { 
      sendDate: new Date(), 
      message: this.model.message, 
      user: "eu" 
    } 
    this.chatProvider.saveMessage(message).then(() => { 

      this.mychats.push(message); 

}) 
  } 
}
