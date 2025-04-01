import { Component, inject } from '@angular/core';
import { GlobalStoreService } from '../../../services/stores/global-store.service';

@Component({
  selector: 'app-steam-achievement',
  imports: [],
  templateUrl: './steam-achievement.component.html',
  styleUrl: './steam-achievement.component.scss',
})
export class SteamAchievementComponent {
  isAlertVisible = false;
  globalStore = inject(GlobalStoreService);

  ngOnInit(): void {

  }

  hideAlert(): void {
    this.isAlertVisible = false;
    this.globalStore.switchTheUserTarpinCong();
  }

  triggerAnimation() {
    if (this.globalStore.isTheUserTarpinCong()) {
      setTimeout(() => {
        this.isAlertVisible = true; // Active l'animation
      }, 100); // Délai avant que l'animation commence
    }
  }
}
