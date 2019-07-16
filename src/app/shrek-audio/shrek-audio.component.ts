import { Component, ElementRef, ViewChild, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-shrek-audio',
  templateUrl: './shrek-audio.component.html',
  styleUrls: ['./shrek-audio.component.css']
})
export class ShrekAudioComponent {
  @Input() audio: Boolean;
  key = 0;
  @ViewChild('audio', {static: false}) myDiv: ElementRef;

  ngDoCheck() {
    if (this.audio) {
      this.playAudio();
    }
  }

  playAudio() {
    if (this.key === 0) {
      this.myDiv.nativeElement.play();
      this.key = 1;
    }
  }

}
