import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CourseComponent } from '../course/course.component';
import { ChallengeComponent } from '../challenge/challenge.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Panel Estudiante'
    },
  },
  {
    path: 'course',
    component: CourseComponent,
    data: {
      title: 'Curso'
    },
  },
  {
    path: 'challenge',
    component: ChallengeComponent,
    data: {
      title: 'Desafío'
    },
  },

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}