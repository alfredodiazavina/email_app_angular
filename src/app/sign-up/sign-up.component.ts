import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signup: Boolean;
  imgUrl: any;
  action: any;
  otherAction: any;
  accountPrompt: any;
  profile: object;
  signUpForm: FormGroup;
  lock: any;
  isLocked: Boolean;
  passType: any;

  public imagePath;
  public message: string;

  @Output() clickSignUp: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  constructor() { }

  ngOnInit() {
    this.passType = 'password';
    this.imgUrl = '../../assets/profile.jpg';
    this.isLocked = true;
    this.lock = 'fa fa-lock fal';
    this.signup = true;
    this.action = 'Sign Up';
    this.otherAction = 'Log In';
    this.accountPrompt = 'Already have an account? ';

    this.signUpForm = new FormGroup({
      firstName: new FormControl('Julie', Validators.required),
      lastName: new FormControl('Krawchuk'),
      email: new FormControl('example@domain', [Validators.required, Validators.email]),
      password: new FormControl('password', Validators.required),
      url: new FormControl(),
      
    });
    this.signUpForm.valueChanges.subscribe((value) => console.log(value));
    this.signUpForm.valueChanges.subscribe((status) => console.log(status));
  }

  signUp() {
    this.clickSignUp.emit(this.signUpForm);
  }

  showPass() {
    this.isLocked = !this.isLocked;
    if (this.isLocked) {
      this.passType = 'password';
      this.lock = 'fa fa-lock fal';
    } else {
      this.lock = 'fa fa-unlock fal';
      this.passType = 'text';
    }
  }

  changeAction() {
    this.signup = !this.signup;
    if (!this.signup) {
      this.imgUrl = '../../assets/profile.jpg';
      this.action = 'Log In';
      this.otherAction = 'Sign Up';
      this.accountPrompt = 'Don\'t have an account? ';
    } else {
      this.action = 'Sign Up';
      this.otherAction = 'Log In';
      this.accountPrompt = 'Already have an account? ';
    }
  }

  onSubmit() {
    this.signUpForm.value.url = this.imgUrl;
    console.log(this.signUpForm);
    console.log(
    'firstName: ' + this.signUpForm.value.firstName + '\n' +
    'lastName: ' + this.signUpForm.value.lastName + '\n' +
    'email: ' + this.signUpForm.value.email + '\n' +
    'password: ' + this.signUpForm.value.password + '\n' +
    'url: ' + this.signUpForm.value.url + '\n'
    );
    this.clickSignUp.emit(this.signUpForm);
  }


  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.imgUrl = reader.result;
    };
  }
}
