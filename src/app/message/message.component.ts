import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  // let message of inboxCount
  // inboxCount[0] = {name: 'name', date: 'date', subject: 'subject', message: 'message'};
  @Input() message;
  constructor() {
   }

  ngOnInit() {
  }

}
