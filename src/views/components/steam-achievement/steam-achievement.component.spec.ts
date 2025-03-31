import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamAchievementComponent } from './steam-achievement.component';

describe('SteamAchievementComponent', () => {
  let component: SteamAchievementComponent;
  let fixture: ComponentFixture<SteamAchievementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteamAchievementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
