import { Component, inject } from '@angular/core';
import { GlobalStoreService } from '../../../services/stores/global-store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fake-btn-2',
  imports: [CommonModule],
  templateUrl: './fake-btn-2.component.html',
  styleUrl: './fake-btn-2.component.scss',
})
export class FakeBtn2Component {
  globalStore = inject(GlobalStoreService);

  buttonClass = 'btn btn-danger';
  buttonText = "Quitter l'application";

  onHover(): void {
    this.buttonClass = 'btn btn-primary';
    this.buttonText = "Lancer l'application";
  }

  onLeave(): void {
    this.buttonClass = 'btn btn-primary';
    this.buttonText = "Lancer l'application";
  }
}
