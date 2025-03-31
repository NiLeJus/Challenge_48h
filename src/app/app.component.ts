import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CorrectCssComponent } from "../views/screens/correct-css/correct-css.component";
import { LandingScreenComponent } from "../views/screens/landing-screen/landing-screen.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CorrectCssComponent, LandingScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'challenge_48h';

  
}
