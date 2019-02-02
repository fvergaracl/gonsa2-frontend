import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

import { Routes } from '@angular/router';
import { InicioComponent_p } from './components/profesor/inicio/inicio.component';
import { Error404Component } from './components/error404/error404.component';
import { EInicioComponent } from './components/estudiante/e-inicio/e-inicio.component';
import { AInicioComponent } from './components/administrador/a-inicio/a-inicio.component';
import { PDesafioComponent } from './components/profesor/p-desafio/p-desafio.component';
import { PDesafioCrearComponent } from './components/profesor/p-desafio-crear/p-desafio-crear.component';
import { PClasesComponent } from './components/profesor/p-clases/p-clases.component';
import { PClasesCrearComponent } from './components/profesor/p-clases-crear/p-clases-crear.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { PClasesDetallesComponent } from './components/profesor/p-clases-detalles/p-clases-detalles.component';
import { PClasesEditarComponent } from './components/profesor/p-clases-editar/p-clases-editar.component';
import { PClasesAgregaralumnoComponent } from './components/profesor/p-clases-agregaralumno/p-clases-agregaralumno.component';
import { ETareasComponent } from './components/estudiante/e-tareas/e-tareas.component';
import { PDesafioDetalleComponent } from './components/profesor/p-desafio-detalle/p-desafio-detalle.component';
import { PDesafioEditarComponent } from './components/profesor/p-desafio-editar/p-desafio-editar.component';
import { PClasesXLSXComponent } from './components/profesor/p-clases-xlsx/p-clases-xlsx.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'login', component: LoginComponent },
    { path: 'profesor/inicio', component: InicioComponent_p },
    { path: 'profesor/desafios', component: PDesafioComponent },
    { path: 'profesor/desafios/crear', component: PDesafioCrearComponent },
    { path: 'profesor/desafios/detalle/:id', component: PDesafioDetalleComponent },
    { path: 'profesor/desafios/editar', component: PDesafioEditarComponent},
    { path: 'profesor/clases', component: PClasesComponent },
    { path: 'profesor/clases/crear', component: PClasesCrearComponent },
    { path: 'profesor/clases/detalles', component: PClasesDetallesComponent},
    { path: 'profesor/clases/XLSX', component: PClasesXLSXComponent},
    { path: 'profesor/clases/editar', component: PClasesEditarComponent},
    { path: 'profesor/clases/agregaralumno', component: PClasesAgregaralumnoComponent},
    { path: 'estudiante/inicio', component: EInicioComponent },
    { path: 'estudiante/tareas', component: ETareasComponent},
    { path: 'administrador/inicio', component: AInicioComponent },
    { path: 'configuracion', component: ConfiguracionComponent},
    { path: 'Error404', component: Error404Component },
    { path: 'profesor', pathMatch: 'full', redirectTo: 'profesor/inicio' },
    { path: 'estudiante', pathMatch: 'full', redirectTo: 'estudiante/inicio' },
    { path: 'administrador', pathMatch: 'full', redirectTo: 'administrador/inicio' },
    { path: '**', pathMatch: 'full', redirectTo: 'Error404' }
]