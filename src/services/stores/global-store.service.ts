import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalStoreService {
  isDarkModeAvailable: WritableSignal<boolean> = signal(true);
  isAtChapter: WritableSignal<number> = signal(0);
  isTheUserTarpinCong: WritableSignal<boolean> = signal(false);

  constructor() {}

  setIsAtChapter(newValue: number) {
    this.isAtChapter.set(newValue);
  }

  hasALetterFallen: WritableSignal<boolean> = signal(false);

  switchHasALetterFallen() {
    this.hasALetterFallen.update((value) => !value);
  }

  makeDarkModeAvailable() {
    this.isDarkModeAvailable.set(false);
  }

  moveToNextChapter() {
    this.isAtChapter.update((value) => ++value);
  }

  switchTheUserTarpinCong() {
    this.isTheUserTarpinCong.update((value) => !value);
  }
}
