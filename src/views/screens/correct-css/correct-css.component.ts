import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-correct-css',
  imports: [FormsModule],
  templateUrl: './correct-css.component.html',
  styleUrl: './correct-css.component.scss'
})
export class CorrectCssComponent {
  backgroundColor: string = '#21606E'; // Couleur par défaut

  updateBackground(): void {
    console.log(`Couleur mise à jour : ${this.backgroundColor}`);
  }
}
