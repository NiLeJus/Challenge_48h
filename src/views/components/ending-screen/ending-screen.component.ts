import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ending-screen',
  standalone: true,
  templateUrl: './ending-screen.component.html',
  styles: []
})
export class EndingScreenComponent {
  @Input() title: string = 'Fin du Jeu';
  @Input() message: string = 'Merci d\'avoir joué !';
  @Output() restart = new EventEmitter<void>();
  @Output() quit = new EventEmitter<void>();

  removeTitle(){
    
  }
}
