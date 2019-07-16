import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDragHeaderComponent } from './message-drag-header.component';

describe('MessageDragHeaderComponent', () => {
  let component: MessageDragHeaderComponent;
  let fixture: ComponentFixture<MessageDragHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDragHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDragHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
