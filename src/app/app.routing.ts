import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LandingHomeComponent } from './views/landing-home/landing-home.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingHomeComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: 'professor',
        loadChildren: () => import('./views/professor/professor.module').then(m => m.ProfessorModule)
      },
      {
        path:'student',
        loadChildren: ()=> import('./views/student/dashboard/student.module').then(m=>m.StudentModule)
      }    
      
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true, anchorScrolling: 'enabled' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
