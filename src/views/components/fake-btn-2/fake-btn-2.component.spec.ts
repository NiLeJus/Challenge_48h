import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeBtn2Component } from './fake-btn-2.component';

describe('FakeBtn2Component', () => {
  let component: FakeBtn2Component;
  let fixture: ComponentFixture<FakeBtn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeBtn2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeBtn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
