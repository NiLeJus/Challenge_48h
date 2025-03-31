import { trigger, transition, style, animate } from '@angular/animations';
import { GlobalStoreService } from '../../../services/stores/global-store.service';
import { NgClass } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-correct-css',
  imports: [FormsModule],
  templateUrl: './correct-css.component.html',
  styleUrl: './correct-css.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class CorrectCssComponent implements OnInit {
  globalStore = inject(GlobalStoreService);


  defaultColor: string = '#000'
  backgroundColor: string = '#21606E'; // Couleur par défaut
  backgroundColorBtn: string = '#f0f8ff00'; // Couleur par défaut

  hasColorChanged() {
    return this.backgroundColorBtn != '#f0f8ff00';
  }

  colorHasChanged: string = '#';

  updateBtnBackground(): void {}

  isDarkModeAvailable() {}

  onBtnClick() {
    this.globalStore.makeDarkModeAvailable();
    this.globalStore.moveToNextChapter();
  }

  isDisabled = true; // Le bouton est désactivé par défaut

  ngOnInit(): void {
    // Activer le bouton après un délai de 3 secondes
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  updateBackground(): void {}
}
