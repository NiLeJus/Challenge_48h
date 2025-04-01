import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunawayBtnComponent } from './runaway-btn.component';

describe('RunawayBtnComponent', () => {
  let component: RunawayBtnComponent;
  let fixture: ComponentFixture<RunawayBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunawayBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunawayBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
