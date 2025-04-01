import { Component } from '@angular/core';
import { CorrectCssComponent } from "../correct-css/correct-css.component";
import { RunnerComponent } from '../runner/runner.component';

@Component({
  selector: 'app-landing-screen',
  imports: [RunnerComponent, CorrectCssComponent],
  templateUrl: './landing-screen.component.html',
  styleUrl: './landing-screen.component.scss'
})
export class LandingScreenComponent {

}
