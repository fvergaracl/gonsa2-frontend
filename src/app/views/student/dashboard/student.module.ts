import { StudentRoutingModule } from './student-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChallengeComponent } from '../challenge/challenge.component';
import { DashboardComponent } from './dashboard.component';
import { CourseComponent } from '../course/course.component';

@NgModule({
    imports: [
      CommonModule,
      StudentRoutingModule,
      
    ],
    declarations: [
        ChallengeComponent,
        DashboardComponent,
        CourseComponent,
    ]
  })
  export class StudentModule { }