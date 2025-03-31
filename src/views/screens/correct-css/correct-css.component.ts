import { GlobalStoreService } from './../../../services/global-store.service';
import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-correct-css',
  imports: [FormsModule],
  templateUrl: './correct-css.component.html',
  styleUrl: './correct-css.component.scss',
})
export class CorrectCssComponent {
  globalStore = inject(GlobalStoreService);

  backgroundColor: string = '#21606E'; // Couleur par défaut
  backgroundColorBtn: string = '#FFFFF'; // Couleur par défaut

  updateBtnBackground(): void {}

  isDarkModeAvailable() {}

  makeDarkModeAvailable() {
    this.globalStore.makeDarkModeAvailable();
  }

  updateBackground(): void {}
}
