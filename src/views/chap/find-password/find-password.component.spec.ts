import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPasswordComponent } from './find-password.component';

describe('FindPasswordComponent', () => {
  let component: FindPasswordComponent;
  let fixture: ComponentFixture<FindPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
