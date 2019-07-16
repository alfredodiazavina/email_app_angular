import { Component, OnInit, Input, DoCheck } from '@angular/core';


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
  @Input() send: Boolean;
  @Input() draft: Boolean;
  @Input() to: string;
  @Input() subject: string;
  @Input() message: string;
  @Input() messagePop: Boolean;

  inboxCount = [];
  draftCount = [];
  sentCount = [];
  trashCount = [];
  spamCount = [];
  email;

  textSmall: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure est quod.';
  textMedium: string = `Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Voluptate facere nemo
   sequi eum totam blanditiis reiciendis quisquam dicta!`;
  textLarge: string = `Lorem ipsum, dolor sit amet consectetur
   adipisicing elit. Quidem quo illo sed dicta alias dolore.
   Numquam ex eligendi ad accusantium earum quas nemo eius.`;


  messageContent = [this.textSmall, this.textMedium, this.textMedium,
    this.textLarge, this.textLarge, this.textMedium, this.textLarge,
    this.textSmall, this.textLarge, this.textMedium, this.textSmall,
    this.textMedium, this.textSmall, this.textLarge, this.textSmall,
    this.textSmall, this.textLarge];
  messageNames = ['Bob', 'Sharley', 'Sarah', 'Bernice', 'Todd', 'Albert',
    'Georgia', 'Sam', 'Carlos', 'Felipe', 'Alexis', 'Bryan', 'Amanda',
    'Alicia', 'Julie', 'Jasmine', 'Maribel'];
  messageSubject = ['Atmosphere', 'Foundation', 'Conscience',
'Particular', 'Plagiarize', 'Assumption', 'Negligence', 'Resolution',
'Memorandum', 'Permission', 'Production', 'Occupation', 'Photograph',
'Technology', 'Artificial', 'Difficulty', 'Reserche']

  constructor() {
    let index = 0;
    let message;
    for (let i = 0; i < 4; i++) {
      message = this.createMessage(this.messageNames[index], this.messageSubject[index],
        this.messageContent[index]);
      this.inboxMessage(message);
      index += 1;
    }
    for (let i = 0; i < 3; i++) {
      message = this.createMessage(this.messageNames[index], this.messageSubject[index],
        this.messageContent[index]);
      this.draftMessage(message);
      index += 1;
    }
    for (let i = 0; i < 1; i++) {
      message = this.createMessage(this.messageNames[index], this.messageSubject[index],
        this.messageContent[index]);
      this.sentMessage(message);
      index += 1;
    }
    for (let i = 0; i < 5; i++) {
      message = this.createMessage(this.messageNames[index], this.messageSubject[index],
        this.messageContent[index]);
      this.spamMessage(message);
      index += 1;
    }
    for (let i = 0; i < 4; i++) {
      message = this.createMessage(this.messageNames[index], this.messageSubject[index],
        this.messageContent[index]);
      this.trashMessage(message);
      index += 1;
    }
  }

  ngOnInit() {
    // this.send = undefined;
    // this.draft = undefined;
  }

  ngDoCheck() {
      console.log("send" + this.send);
      console.log("draft" + this.draft);
      if (this.send) {
        console.log("Changed from true to false");
        let message = this.createMessage(this.to, this.subject, this.message);
        this.sentMessage(message);
        this.send = false;

      }
      if (this.draft) {
        let message = this.createMessage(this.to, this.subject, this.message);
        this.draftMessage(message);
        this.draft = false;
      }
      // this.send = undefined;
      // this.draft = undefined;
  }

  inboxMessage(message) {
    this.inboxCount.unshift(message);
  }

  draftMessage(message) {
    this.draftCount.unshift(message);
  }

  sentMessage(message) {
    this.sentCount.unshift(message);
  }

  spamMessage(message) {
    this.spamCount.unshift(message);
  }

  trashMessage(message) {
    this.trashCount.unshift(message);
  }

  createMessage(to: string, subject: string, message: string) {
    this.email = {
      to: (to),
      subject: (subject),
      message: (message)
    };

    return this.email;
  }


}
