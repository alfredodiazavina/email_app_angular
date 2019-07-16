import { Component, Input, DoCheck } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})

export class ProfileInfoComponent {
  @Input() test: number;
  @Input() logInInfo: FormGroup;

  linkList = ['./../../assets/shrekie.PNG',
   '../../assets/profile.jpg'];
  nameList = ['Shrek', ''];
  emailList = ['ShrekShredder69420@my.swamp',
   ''];
  notsList = [69, 23];
  link: string;
  name: string;
  email: string ;
  notifics: number;

  constructor() { }

  ngDoCheck() {
    this.link = this.linkList[this.test];
    this.name = this.nameList[this.test];
    this.email = this.emailList[this.test];
    this.notifics = this.notsList[this.test];
    if (this.logInInfo) {
      if (this.logInInfo.value.url) {
        this.link = this.logInInfo.value.url;
      }
      this.name = this.logInInfo.value.firstName + ' ' + this.logInInfo.value.lastName;
      this.email = this.logInInfo.value.email;
    }
  }
}
