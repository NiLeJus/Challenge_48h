import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingScreenComponent } from '../views/screens/landing-screen/landing-screen.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'challenge_48h';
}
