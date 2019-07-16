import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inboxDrop: Boolean;
  sentDrop: Boolean;
  draftDrop: Boolean;
  trashDrop: Boolean;
  spamDrop: Boolean;
  messagePop: Boolean;
  send: Boolean;
  draft: Boolean;
  to: string;
  subject: string;
  message: string;
  audio: Boolean;
  signUp: Boolean = true;
  logInDeets: FormGroup

  inboxChanged(data: Boolean){
    this.inboxDrop = data;
  }

  draftChanged(data: Boolean){
    this.draftDrop = data;
  }

  sentChanged(data: Boolean){
    this.sentDrop = data;
  }

  trashChanged(data: Boolean){
    this.trashDrop = data;
  }

  spamChanged(data: Boolean){
    this.spamDrop = data;
  }

  popUpChanged(data: Boolean){
    this.messagePop = data;
  }

  messageClosed(data: Boolean) {
    this.messagePop = !this.messagePop;
  }

  run() {
    console.log(this.messagePop);
    console.log(this.trashDrop);
  }

  sent(data) {
    this.send = data;
    this.draft = false;
    console.log("Final send: " + this.send);
    console.log("Final draft: " + this.draft);
  }

  drafted(data) {
    this.draft = data;
    this.send = false;
    console.log("Final draft: " + this.draft);
    console.log("Final send: " + this.send);
  }

  sendingTo(data) {
    this.to = data;
    console.log(data);
  }

  sendingSubject(data) {
    this.subject = data;
    console.log(data);
  }

  sendingMessage(data) {
    this.message = data;
    console.log(data);
  }

  playAudio() {
    this.audio = true;
  }

  clickSignUp(data) {
    this.signUp = !this.signUp;
    this.logInDeets = data;
  }
}
