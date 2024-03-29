import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

import { InicioComponent } from './components/profesor/inicio/inicio.component';
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
import { EBusquedasComponent } from './components/estudiante/e-busquedas/e-busquedas.component';
import { PDesafioDetallesComponent } from './components/profesor/p-desafio-detalles/p-desafio-detalles.component';
import { InformesComponent } from './components/profesor/informes/informes.component';
import { PClasesCrearEstudianteComponent } from './components/profesor/p-clases-crear-estudiante/p-clases-crear-estudiante.component';

export const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'profesor/inicio', component: InicioComponent },
    { path: 'profesor/desafios', component: PDesafioComponent },
    { path: 'profesor/desafios/crear', component: PDesafioCrearComponent },
    { path: 'profesor/desafios/detalle/:id', component: PDesafioDetalleComponent },
    { path: 'profesor/desafios/editar', component: PDesafioEditarComponent},
    { path: 'profesor/clases', component: PClasesComponent },
    { path: 'profesor/clases/crear', component: PClasesCrearComponent },
    { path: 'profesor/clases/detalles', component: PClasesDetallesComponent},
    { path: 'profesor/clases/crearEstudiante', component: PClasesCrearEstudianteComponent},
    { path: 'profesor/clases/XLSX', component: PClasesXLSXComponent},
    { path: 'profesor/clases/editar', component: PClasesEditarComponent},
    { path: 'profesor/clases/agregaralumno', component: PClasesAgregaralumnoComponent},
    { path: 'profesor/informes', component: InformesComponent},
    { path: 'estudiante/inicio', component: EInicioComponent },
    { path: 'estudiante/tareas', component: ETareasComponent},
    { path: 'estudiante/busquedas', component: EBusquedasComponent},
    { path: 'administrador/inicio', component: AInicioComponent },
    { path: 'configuracion', component: ConfiguracionComponent},
    { path: 'Error404', component: Error404Component },
    { path: '**', pathMatch: 'full', redirectTo: 'Error404' }
]