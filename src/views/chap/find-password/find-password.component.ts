import { Component, inject, signal, WritableSignal } from '@angular/core';
import { GlobalStoreService } from '../../../services/stores/global-store.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-password',
  imports: [FormsModule],
  templateUrl: './find-password.component.html',
  styleUrl: './find-password.component.scss',
})
export class FindPasswordComponent {
  globalStore = inject(GlobalStoreService);
  isUnlocked: WritableSignal<boolean> = signal(false);

  userInput: string = '';
  password: string = 'AA1A17';
  valueDefault = "Il n'y a pas de mdp";

  isPasswordValid(): boolean {
    return this.userInput.toUpperCase() === this.password;
  }
}
