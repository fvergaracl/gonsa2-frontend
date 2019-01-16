import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

import { Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { EstudianteComponent } from './components/estudiante/estudiante.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent, },
    { path: 'login', component: LoginComponent },
    { path: 'estudiante', component: EstudianteComponent, canActivate: [LoginGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]