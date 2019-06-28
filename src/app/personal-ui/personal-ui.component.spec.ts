import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalUiComponent } from './personal-ui.component';

describe('PersonalUiComponent', () => {
  let component: PersonalUiComponent;
  let fixture: ComponentFixture<PersonalUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
