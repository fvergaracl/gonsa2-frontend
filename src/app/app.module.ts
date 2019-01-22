import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LayoutModule } from 'angular-admin-lte';    //Loading layout module
import { BoxModule } from 'angular-admin-lte';       //Box component
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxEditorModule } from 'ngx-editor';
import { SelectDropDownModule } from 'ngx-select-dropdown'

import { LoginService } from './services/login.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { ROUTES } from './app.routes'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { DashboardHeaderComponent } from './components/profesor/dashboardcomp/dashboard-header/dashboard-header.component';
import { InicioComponent_p } from './components/profesor/inicio/inicio.component';
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
import { PClasesEditarComponent } from './components/profesor/p-clases-editar/p-clases-editar.component';



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
    EstudianteComponent,
    DashboardHeaderComponent,
    InicioComponent_p,
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
    PClasesEditarComponent
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
    RouterModule.forRoot(ROUTES),
    LayoutModule.forRoot(adminLteConf),
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
