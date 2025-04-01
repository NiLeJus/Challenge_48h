import { Component, inject } from '@angular/core';
import { AnimationService } from '../../../services/animation-service/animation.service';

@Component({
  selector: 'app-falling-btn',
  imports: [],
  templateUrl: './falling-btn.component.html',
  styleUrl: './falling-btn.component.scss',
})
export class FallingBtnComponent {
  animationService = inject(AnimationService);
}
