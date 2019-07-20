import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-ui',
  templateUrl: './personal-ui.component.html',
  styleUrls: ['./personal-ui.component.css']
})
export class PersonalUiComponent implements OnInit {
  @Input() logInDeets: FormGroup;
  showInbox: Boolean = false;
  showDrafts: Boolean = false;
  showSent: Boolean = false;
  showTrash: Boolean = false;
  showSpam: Boolean = false;
  showPopUp: Boolean = false;
  index: number = 1;
  key: number = 0;

  @Output() inboxChanged: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() draftChanged: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() sentChanged: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() trashChanged: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() spamChanged: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() popUpChanged: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() playAudio: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  popUp() {
    this.showPopUp = true;
    this.popUpChanged.emit(this.showPopUp);
    this.playAudio.emit();
    if (this.key === 0) {
      this.index = 0;
    }
  }

  inboxDropDown() {
    this.showInbox = !this.showInbox;
    this.inboxChanged.emit(this.showInbox);
  }

  draftDropDown() {
    this.showDrafts = !this.showDrafts;
    this.draftChanged.emit(this.showDrafts);
  }

  sentDropDown() {
    this.showSent = !this.showSent;
    this.sentChanged.emit(this.showSent);
  }

  trashDropDown() {
    this.showTrash = !this.showTrash;
    this.trashChanged.emit(this.showTrash);
  }

  spamDropDown() {
    this.showSpam = !this.showSpam;
    this.spamChanged.emit(this.showSpam);
  }
}









































/*
PHP--- idk
JAVSCRIPT
mySQL

Procedure Card
Lenita Willington
Cloud-based surgical preferenc ecard
Management platform
=A list of tools, instruments + supplies used in surgery

How to get started
Ask: Has it been done? Do I have compeetitors? Is there really ablem? What does surger need
What to find in reseach: Look from outside in, inside out, and too big of a bite
Good advice: Mentors + get good legal advice ( get intelectual property lawter + get disclosure + mutaul )
Contract attorney,
Bad Advicee: Navigate + follow your gut + pay for good advice

Lenita's journey
Contract Attorney Marketing/Media/Sales
Software engineer
IP Attorney + Accountants
Sales: getting to sell the product
Book called Startup, Entrepenuers Ethos
Cycle: Idea -> Build -> Code -> Measure
grow a company through making iterations t grow it (skatebord to bike to car)
Costumer service is super important

Evolution:
Always Grinding - Sales (learning to listen) Ask for Help (Arie Todd) Grit



*/
