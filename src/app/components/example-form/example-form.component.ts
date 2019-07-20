import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css']
})

export class ExampleFormComponent {
  title = 'Forms';
  accountType = ['Personal', 'Business', 'Social'];
  signupForm: FormGroup;

  constructor() {

  }

  ngOnInit() {
    // Don't call the validators, only pass the reference
    this.signupForm = new FormGroup({
      'accountType': new FormControl('Personal', Validators.required),
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'streetAddress': new FormControl(null),
      'city': new FormControl(null),
      'country': new FormControl(null, Validators.required),
      'zipCode': new FormControl(null, [Validators.pattern('[0-9]*'), Validators.maxLength(5)])
      // Only match numbers, and as many as desired
    });

    this.signupForm.valueChanges.subscribe((value) => console.log(value));
    this.signupForm.valueChanges.subscribe((status) => console.log(status));

    this.signupForm.setValue({
      'Account type': 'Personal',
      'name': 'Name',
      'email': 'example@domain',
      'streetAddress': '123 some street',
      'city': 'city',
      'country': '',
      'zipCode': '12345'
    });

    // Update/patch form values
    this.signupForm.patchValue({
      'email': 'example@domain-second'
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(
    "Account type: " + this.signupForm.value.accountType + "\n" +
    "name: " + this.signupForm.value.accountType + "\n" +
    "email: " + this.signupForm.value.name + "\n" +
    "streetAddress: " + this.signupForm.value.email + "\n" +
    "city: " + this.signupForm.value.streetAddress + "\n" +
    "country: " + this.signupForm.value.city + "\n" +
    "zipCode: " + this.signupForm.value.zipCode + "\n"
    );
  }

  onReset() {
    this.signupForm.reset();
  }

}
