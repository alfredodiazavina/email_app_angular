import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPopUpComponent } from './email-pop-up.component';

describe('EmailPopUpComponent', () => {
  let component: EmailPopUpComponent;
  let fixture: ComponentFixture<EmailPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
