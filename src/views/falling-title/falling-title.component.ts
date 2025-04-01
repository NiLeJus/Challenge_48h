import { GlobalStoreService } from './../../services/stores/global-store.service';
import {
  Component,
  ViewChildren,
  ElementRef,
  QueryList,
  Renderer2,
  HostListener,
  OnDestroy,
  Output,
  EventEmitter,
  inject,
} from '@angular/core';

interface FallState {
  gravity: number;
  velocity: number;
  position: number;
  isFalling: boolean;
  floor: number;
}

@Component({
  selector: 'app-falling-title',
  standalone: true,
  template: `
    <div class="container">
      @for (letter of letters; track $index; let idx = $index) {
      <span
        class="letter"
        #letterRef
        (click)="startFall(idx)"
        [style.transition]="
          states[idx].isFalling ? 'none' : 'transform 0.5s ease-out'
        "
      >
        {{ letter }}
      </span>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f0f0;
        overflow: hidden;
        margin: 0;
        position: relative;
      }

      .container {
        display: flex;
        gap: 10px;
        font-size: 50px;
        font-weight: bold;
        cursor: pointer;
        position: relative;
      }

      .letter {
        position: relative;
        display: inline-block;
        color: red;
      }
    `,
  ],
})
export class FallingTitleComponent implements OnDestroy {
  @ViewChildren('letterRef') letterElements!: QueryList<
    ElementRef<HTMLElement>
  >;
  @Output() letterLanded = new EventEmitter<{
    index: number;
    letter: string;
  }>();

  letters = ['E', 'r', 'r', 'o', 'r', ' ', ' ', ' ', '4', '0', '4'];
  states: FallState[] = [];
  private animationFrameIds: number[] = [];

  globalStore = inject(GlobalStoreService);

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.initializeStates();
  }

  private initializeStates() {
    this.letterElements.forEach((letterEl, index) => {
      const rect = letterEl.nativeElement.getBoundingClientRect();
      this.states[index] = {
        gravity: 0.8,
        velocity: 0,
        position: 0,
        isFalling: false,
        floor:
          window.innerHeight - rect.top - letterEl.nativeElement.clientHeight,
      };
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.letterElements.forEach((letterEl, index) => {
      const rect = letterEl.nativeElement.getBoundingClientRect();
      this.states[index].floor =
        window.innerHeight - rect.top - letterEl.nativeElement.clientHeight;
    });
  }

  startFall(index: number) {
    const letterEl = this.letterElements.get(index)?.nativeElement;
    if (!letterEl || this.states[index].isFalling) return;

    this.states[index].isFalling = true;
    this.states[index].velocity = 0;

    const animate = () => {
      if (!this.states[index].isFalling) return;

      this.states[index].velocity += this.states[index].gravity;
      this.states[index].position += this.states[index].velocity;

      if (this.states[index].position >= this.states[index].floor) {
        this.states[index].position = this.states[index].floor;
        this.states[index].isFalling = false;
        this.applyTransform(letterEl, index);

        this.globalStore.switchHasALetterFallen();
      }

      this.applyTransform(letterEl, index);
      this.animationFrameIds[index] = requestAnimationFrame(animate);
    };

    this.animationFrameIds[index] = requestAnimationFrame(animate);
  }

  private applyTransform(element: HTMLElement, index: number) {
    this.renderer.setStyle(
      element,
      'transform',
      `translateY(${this.states[index].position}px)`
    );
  }

  ngOnDestroy() {
    this.animationFrameIds.forEach((id) => cancelAnimationFrame(id));
  }
}
