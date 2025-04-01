import { Routes } from '@angular/router';
import { LandingScreenComponent } from '../views/screens/landing-screen/landing-screen.component';
import { RunnerComponent } from '../views/screens/runner/runner.component';

export const routes: Routes = [
  { path: '', component: LandingScreenComponent },
  { path: '**', component: LandingScreenComponent },
  { path: 'runner', component: RunnerComponent },
];
