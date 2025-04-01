import {
  Component,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnDestroy,
  input,
  output,
  inject,
  effect,
} from '@angular/core';
import { GlobalStoreService } from '../../../services/stores/global-store.service';

@Component({
  selector: 'app-falling-button',
  standalone: true,
  template: `
    <button
      class="falling-btn btn btn-primary"
      (click)="onClick()"
      [style.top.px]="currentPosition"
    >
      {{ label() }}
    </button>
  `,
  styles: [
    `
      :host {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
      }

      .falling-btn {
        padding: 15px 30px;
        font-size: 18px;
        border: none;
        border-radius: 25px;
        background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
        color: white;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: top 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s ease;
      }

      .falling-btn:hover {
        transform: translateX(-50%) scale(1.05);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      }

      .falling-btn:active {
        transform: translateX(-50%) scale(0.95);
      }
    `,
  ],
})
export class FallingBtnComponent implements OnDestroy {
  label = input("Lancer l'application");
  landed = output<void>();

  private animationFrameId!: number;
  currentPosition = -100;
  private readonly gravity = 0.8;
  private velocity = 0;
  private stopAnimation = false;

  private startFall = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    // Surveille les changements de l'état global
    effect(() => {
      if (this.globalStore.hasALetterFallen()) {
        this.startFall = true;
        this.startAnimation();
      }
    });
  }
  private startAnimation() {
    if (!this.startFall) return;

    const calculateFloor = () => {
      const btnHeight = this.el.nativeElement.offsetHeight;
      return window.innerHeight - btnHeight - 20;
    };

    const animate = () => {
      if (this.stopAnimation) return;

      this.velocity += this.gravity;
      this.currentPosition += this.velocity;

      const floorPosition = calculateFloor();

      if (this.currentPosition >= floorPosition) {
        this.currentPosition = floorPosition;
        this.landed.emit();
        return;
      }

      this.renderer.setStyle(
        this.el.nativeElement,
        'top',
        `${this.currentPosition}px`
      );
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  ngOnDestroy() {
    this.stopAnimation = true;
    cancelAnimationFrame(this.animationFrameId);
  }
  globalStore = inject(GlobalStoreService);

  onClick() {
    this.globalStore.moveToNextChapter();
  }
}
