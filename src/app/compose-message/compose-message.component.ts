import { Component, OnInit, Output, EventEmitter, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {
  to = '';
  subject = '';
  message = '';
  @Output() sendTo: EventEmitter<string> = new EventEmitter<string>();
  @Output() sendSubject: EventEmitter<string> = new EventEmitter<string>();
  @Output() sendMessage: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {
  }

  onKeyUp() {
    console.log(this.to);
    console.log(this.subject);
    console.log(this.message);
  }

  ngDoCheck() {
    this.sendTo.emit(this.to);
    this.sendSubject.emit(this.subject);
    this.sendMessage.emit(this.message);
  }

}
