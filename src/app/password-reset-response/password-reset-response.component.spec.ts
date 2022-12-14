import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetResponseComponent } from './password-reset-response.component';

describe('PasswordResetResponseComponent', () => {
  let component: PasswordResetResponseComponent;
  let fixture: ComponentFixture<PasswordResetResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordResetResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordResetResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
