import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeBtnComponent } from './fake-btn.component';

describe('FakeBtnComponent', () => {
  let component: FakeBtnComponent;
  let fixture: ComponentFixture<FakeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
