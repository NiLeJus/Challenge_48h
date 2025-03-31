import { Routes } from '@angular/router';
import { LandingScreenComponent } from '../views/screens/landing-screen/landing-screen.component';

export const routes: Routes = [
    { path: '', component: LandingScreenComponent },
    { path: '**', component: LandingScreenComponent }
];
