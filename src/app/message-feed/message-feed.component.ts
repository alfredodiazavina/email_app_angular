import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.css']
})
export class MessageFeedComponent implements OnInit {
  @Input() inboxDrop: Boolean;
  @Input() draftDrop: Boolean;
  @Input() sentDrop: Boolean;
  @Input() trashDrop: Boolean;
  @Input() spamDrop: Boolean;
  array = [0, 1, 2];
  constructor() { }

  ngOnInit() {
  }

}
