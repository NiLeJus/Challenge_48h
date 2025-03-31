import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GlobalStoreService } from '../../../services/stores/global-store.service';

@Component({
  selector: 'app-fake-btn',
  imports: [CommonModule],
  templateUrl: './fake-btn.component.html',
  styleUrl: './fake-btn.component.scss',
})
export class FakeBtnComponent {
  globalStore = inject(GlobalStoreService);

  buttonClass = 'btn btn-primary';
  buttonText = "Lancer l'application";

  //En gros y'a un timeout pour que l'utilisateur puis capté qu'il est cong
  handleClick(): void {
    setTimeout(() => {
      this.actionToPerform();
    }, 1000);
  }

  actionToPerform() {
    this.globalStore.setIsAtChapter(0);
    this.globalStore.switchTheUserTarpinCong();
  }

  onHover(): void {
    this.buttonClass = 'btn btn-danger';
    this.buttonText = "Quitter l'application";
  }

  onLeave(): void {
    this.buttonClass = 'btn btn-primary';
    this.buttonText = "Lancer l'application";
  }
}
