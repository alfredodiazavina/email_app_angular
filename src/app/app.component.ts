import { Component } from '@angular/core';

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

  inboxChanged(data: Boolean){
    this.inboxDrop = data;
  }

  draftChanged(data: Boolean){
    this.sentDrop = data;
  }

  sentChanged(data: Boolean){
    this.draftDrop = data;
  }

  trashChanged(data: Boolean){
    this.trashDrop = data;
  }

  spamChanged(data: Boolean){
    this.spamDrop = data;
  }


}
