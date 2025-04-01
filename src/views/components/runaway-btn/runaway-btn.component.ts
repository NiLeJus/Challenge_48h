import {
  Component,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';
import { GlobalStoreService } from '../../../services/stores/global-store.service';

@Component({
  selector: 'app-runaway-btn',
  standalone: true,
  templateUrl: './runaway-btn.component.html',
  styleUrl: './runaway-btn.component.scss',
})
export class RunawayBtnComponent {
  globalStore = inject(GlobalStoreService);

  //In px
  private readonly sensitivity = 0.2;
  private readonly activationRadius = 150;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const button = this.el.nativeElement.querySelector('button');
    const rect = button.getBoundingClientRect();

    // Position centrale du bouton
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    // Calcul de la distance entre souris et bouton
    const deltaX = event.clientX - btnCenterX;
    const deltaY = event.clientY - btnCenterY;
    const distance = Math.hypot(deltaX, deltaY);

    if (distance < this.activationRadius) {
      // Calcul de la force de répulsion (augmentez `forceMultiplier` pour un effet plus fort)
      const forceMultiplier =
        ((this.activationRadius - distance) / this.activationRadius) *
        this.sensitivity *
        10;
      const moveX = deltaX * forceMultiplier;
      const moveY = deltaY * forceMultiplier;

      this.renderer.setStyle(
        button,
        'transform',
        `translate(calc(-50% + ${-moveX}px), calc(-50% + ${-moveY}px))`
      );
    } else {
      // Retour progressif à la position initiale
      this.renderer.setStyle(button, 'transform', 'translate(-50%, -50%)');
    }
  }
}
