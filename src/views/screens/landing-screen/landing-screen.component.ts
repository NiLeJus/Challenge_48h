import { GlobalStoreService } from '../../../services/stores/global-store.service';
import { Component, inject } from '@angular/core';
import { CorrectCssComponent } from '../../chap/correct-css/correct-css.component';
import { RunawayBtnComponent } from "../../components/runaway-btn/runaway-btn.component";
import { FakeBtnComponent } from "../../components/fake-btn/fake-btn.component";
import { SteamAchievementComponent } from "../../components/steam-achievement/steam-achievement.component";
import { FakeBtn2Component } from "../../components/fake-btn-2/fake-btn-2.component";
import { FallingBtnComponent } from "../../components/falling-btn/falling-btn.component";
import { RunnerComponent } from "../runner/runner.component";
import { FindPasswordComponent } from "../../chap/find-password/find-password.component";
import { FallingTitleComponent } from "../../falling-title/falling-title.component";
import { EndingScreenComponent } from "../../components/ending-screen/ending-screen.component";

@Component({
  selector: 'app-landing-screen',
  imports: [CorrectCssComponent, RunawayBtnComponent, FakeBtnComponent, SteamAchievementComponent, FakeBtn2Component, FallingBtnComponent, RunnerComponent, FindPasswordComponent, FallingTitleComponent, EndingScreenComponent],
  templateUrl: './landing-screen.component.html',
  styleUrl: './landing-screen.component.scss',
})

export class LandingScreenComponent {
  globalStore = inject(GlobalStoreService);

  onRestart() {
    this.globalStore.setIsAtChapter(0);
  }


}
