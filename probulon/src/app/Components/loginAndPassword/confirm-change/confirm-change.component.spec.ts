import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmChangeComponent } from './confirm-change.component';

describe('ConfirmChangeComponent', () => {
  let component: ConfirmChangeComponent;
  let fixture: ComponentFixture<ConfirmChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmChangeComponent]
    });
    fixture = TestBed.createComponent(ConfirmChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
