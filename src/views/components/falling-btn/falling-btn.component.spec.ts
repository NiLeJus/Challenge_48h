import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallingBtnComponent } from './falling-btn.component';

describe('FallingBtnComponent', () => {
  let component: FallingBtnComponent;
  let fixture: ComponentFixture<FallingBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FallingBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FallingBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
