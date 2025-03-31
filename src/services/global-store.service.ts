import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalStoreService {
  isDarkModeAvailable: WritableSignal<boolean> = signal(true);

  constructor() {}

  makeDarkModeAvailable() {
    this.isDarkModeAvailable.set(false);
  }
}
