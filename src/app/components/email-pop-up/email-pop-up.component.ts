import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-pop-up',
  templateUrl: './email-pop-up.component.html',
  styleUrls: ['./email-pop-up.component.css']
})
export class EmailPopUpComponent implements OnInit {

  @Input() messagePop: Boolean;
  @Output() messageClosed: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() sent: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() drafted: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() sendingTo: EventEmitter<any> = new EventEmitter<any>();
  @Output() sendingSubject: EventEmitter<any> = new EventEmitter<any>();
  @Output() sendingMessage: EventEmitter<any> = new EventEmitter<any>();
  to: string;
  subject: string;
  message: string;
  isDrafted: Boolean;
  isSent: Boolean;

  constructor() {
  }

  ngOnInit() {
    console.log("This gets called");
    this.isDrafted = false;
    this.isSent = false;
    console.log("bug: " + this.isDrafted);
  }

  turnOff() {
    this.messagePop = false;
    this.messageClosed.emit(this.messagePop);
  }

  sentMessage() {
    console.log("send" + this.isSent);
    console.log("draft" + this.isDrafted);
    this.messagePop = false;
    this.messageClosed.emit(this.messagePop);
    this.isSent = true;
    console.log("Sent" + this.isSent);
    this.sent.emit(this.isSent);
    this.emit();
  }

  draftingMessage() {
    console.log("send" + this.isSent);
    console.log("draft" + this.isDrafted);
    this.messagePop = false;
    this.messageClosed.emit(this.messagePop);
    this.isDrafted = true;
    console.log("Draft" + this.isDrafted);
    this.drafted.emit(this.isDrafted);
    this.emit();
  }

  sendTo(data) {
    this.to = data;
  }

  sendSubject(data) {
    this.subject = data;
  }

  sendMessage(data) {
    this.message = data;
  }

  emit() {
    this.sendingTo.emit(this.to);
    this.sendingSubject.emit(this.subject);
    this.sendingMessage.emit(this.message);
    console.log(this.to + "\n" + this.subject + "\n" + this.message);
  }


}
