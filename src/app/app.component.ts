import { Component } from '@angular/core';
import { LandingScreenComponent } from '../views/screens/landing-screen/landing-screen.component';
import { FallingTitleComponent } from "../views/falling-title/falling-title.component";

@Component({
  selector: 'app-root',
  imports: [LandingScreenComponent, FallingTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'challenge_48h';
}
