import { GlobalStoreService } from './../../../services/global-store.service';
import { Component, inject } from '@angular/core';
import { CorrectCssComponent } from '../correct-css/correct-css.component';

@Component({
  selector: 'app-landing-screen',
  imports: [CorrectCssComponent],
  templateUrl: './landing-screen.component.html',
  styleUrl: './landing-screen.component.scss',
})
export class LandingScreenComponent {
  globalStore = inject(GlobalStoreService);

  
}
