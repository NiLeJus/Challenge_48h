import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectCssComponent } from './correct-css.component';

describe('CorrectCssComponent', () => {
  let component: CorrectCssComponent;
  let fixture: ComponentFixture<CorrectCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrectCssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
