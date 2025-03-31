import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  startAnimation = signal(false);

  triggerFall(): void {
    this.startAnimation.set(true);
    setTimeout(() => {
      this.startAnimation.set(false);
    }, 2000);
  }
}
