import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

import { Routes } from '@angular/router';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { InicioComponent_p } from './components/profesor/inicio/inicio.component';
import { Error404Component } from './components/error404/error404.component'
import { EInicioComponent } from './components/estudiante/e-inicio/e-inicio.component'
import { AInicioComponent } from './components/administrador/a-inicio/a-inicio.component'
import { PDesafioComponent } from './components/profesor/p-desafio/p-desafio.component';
import { PDesafioCrearComponent } from './components/profesor/p-desafio-crear/p-desafio-crear.component'
import { PClasesComponent } from './components/profesor/p-clases/p-clases.component';
import { PClasesCrearComponent } from './components/profesor/p-clases-crear/p-clases-crear.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';



export const ROUTES: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'login', component: LoginComponent },
    { path: 'estudiante', component: EstudianteComponent },
    { path: 'profesor/inicio', component: InicioComponent_p },
    { path: 'profesor/desafios', component: PDesafioComponent },
    { path: 'profesor/desafios/crear', component: PDesafioCrearComponent },
    { path: 'profesor/clases', component: PClasesComponent },
    { path: 'profesor/clases/crear', component: PClasesCrearComponent },
    { path: 'estudiante/inicio', component: EInicioComponent },
    { path: 'administrador/inicio', component: AInicioComponent },
    { path: 'configuracion', component: ConfiguracionComponent},
    { path: 'Error404', component: Error404Component },
    { path: 'profesor', pathMatch: 'full', redirectTo: 'profesor/inicio' },
    { path: 'estudiante', pathMatch: 'full', redirectTo: 'estudiante/inicio' },
    { path: 'administrador', pathMatch: 'full', redirectTo: 'administrador/inicio' },
    { path: '**', pathMatch: 'full', redirectTo: 'Error404' }
]