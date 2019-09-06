import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NguCarouselModule } from '@ngu/carousel';
import { MatIconModule, MatButtonModule, MatCardModule, MatCheckboxModule } from '@angular/material';

import { HashLocationStrategy, Location, PathLocationStrategy, LocationStrategy } from '@angular/common';


import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LayoutModule } from 'angular-admin-lte'; // Loading layout module
import { BoxModule } from 'angular-admin-lte';       // Box component
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxEditorModule } from 'ngx-editor';
import { SelectDropDownModule } from 'ngx-select-dropdown';

import { LoginService } from './services/login.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DashboardHeaderComponent } from './components/profesor/dashboardcomp/dashboard-header/dashboard-header.component';
import { DashboardHeaderComponentEstudiante } from './components/estudiante/dashboardcomp/dashboard-header/dashboard-header.component';
import { InicioComponent } from './components/profesor/inicio/inicio.component';
import { DashboardSidebarComponent } from './components/profesor/dashboardcomp/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardFooterComponent } from './components/profesor/dashboardcomp/dashboard-footer/dashboard-footer.component';
import { Error404Component } from './components/error404/error404.component';
import { Error403Component } from './components/error403/error403.component';
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

import { ModalalertaComponent } from './components/modalalerta/modalalerta.component';
import { ETareasComponent } from './components/estudiante/e-tareas/e-tareas.component';
import { PDesafioDetalleComponent } from './components/profesor/p-desafio-detalle/p-desafio-detalle.component';
import { PDesafioEditarComponent } from './components/profesor/p-desafio-editar/p-desafio-editar.component';
import { PClasesXLSXComponent } from './components/profesor/p-clases-xlsx/p-clases-xlsx.component';
import { EBusquedasComponent } from './components/estudiante/e-busquedas/e-busquedas.component';
import { DashboardestuSidebarComponent } from './components/estudiante/dashboardcomp/dashboardestu-sidebar/dashboardestu-sidebar.component';
import { PDesafioDetallesComponent } from './components/profesor/p-desafio-detalles/p-desafio-detalles.component';
import { NoiniciadaComponent } from './components/estudiante/e-tareas/carouselcomp/noiniciada/noiniciada.component';
import { TerminadaComponent } from './components/estudiante/e-tareas/carouselcomp/terminada/terminada.component';
import { NoterminadaComponent } from './components/estudiante/e-tareas/carouselcomp/noterminada/noterminada.component';
import { InformesComponent } from './components/profesor/informes/informes.component';

import { ChartsModule } from 'ng2-charts';
import { MensajeComponent } from './components/estudiante/e-tareas/carouselcomp/mensaje/mensaje.component';
import { PClasesCrearEstudianteComponent } from './components/profesor/p-clases-crear-estudiante/p-clases-crear-estudiante.component';



var adminLteConf = {
  skin: 'blue',
  sidebarLeftMenu: [
    {label: 'Panel', separator: true},
    {label: ' Inicio', route: '/profesor/inicio', iconClasses: 'fa fa-dashboard'},
    {label: ' Desafíos', iconClasses: 'fa fa-tasks', route: '/profesor/desafios'},
    {label: ' Clases', iconClasses: 'fas fa-users', route: '/profesor/clases'},
    {label: ' Informes', iconClasses: 'fa fa-files-o', route: '/profesor/informes'},
    {label: ' Cuenta', separator: true},
    {label: ' Configuraciones', iconClasses: 'fa fa-cogs', route: '/configuracion'}
  ]
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardHeaderComponent,
    DashboardHeaderComponentEstudiante,
    InicioComponent,
    DashboardSidebarComponent,
    DashboardFooterComponent,
    Error404Component,
    Error403Component,
    EInicioComponent,
    AInicioComponent,
    PDesafioComponent,
    PDesafioCrearComponent,
    PClasesComponent,
    PClasesCrearComponent,
    ConfiguracionComponent,
    PClasesDetallesComponent,
    PClasesEditarComponent,
    PClasesAgregaralumnoComponent,
    ETareasComponent,
    ModalalertaComponent,
    PDesafioDetalleComponent,
    PDesafioEditarComponent,
    PClasesXLSXComponent,
    EBusquedasComponent,
    DashboardestuSidebarComponent,
    PDesafioDetallesComponent,
    NoiniciadaComponent,
    TerminadaComponent,
    NoterminadaComponent,
    InformesComponent,
    MensajeComponent,
    PClasesCrearEstudianteComponent,
   ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    SelectDropDownModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TagInputModule,
    NgxEditorModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserModule,
    FormsModule,
    LayoutModule.forRoot(adminLteConf),
  RouterModule.forRoot(ROUTES),
    
    HttpClientModule,
    AngularFontAwesomeModule,
    NguCarouselModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    ChartsModule
  ],
  providers: [Location, LoginService, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
