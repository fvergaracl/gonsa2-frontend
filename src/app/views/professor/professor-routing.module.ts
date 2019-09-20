import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessorComponent } from './professor.component';
import { CourseComponent } from './course/course.component';
import { ChallengesComponent } from './challenges/challenges.component';


const routes: Routes = [
  {
    path: '',
    component: ProfessorComponent,
    data: {
      title: 'Dashboard'
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
    path: 'challenges',
    component: ChallengesComponent,
    data: {
      title: 'Curso'
    },
  },

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule {}
