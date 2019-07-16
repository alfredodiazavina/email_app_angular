import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrekAudioComponent } from './shrek-audio.component';

describe('ShrekAudioComponent', () => {
  let component: ShrekAudioComponent;
  let fixture: ComponentFixture<ShrekAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrekAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrekAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
