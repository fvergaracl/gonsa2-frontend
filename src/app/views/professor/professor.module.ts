// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//import { MDBBootstrapModule } from 'angular-bootstrap-md';
// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
//Modal module
import { ModalModule } from 'ngx-bootstrap/modal';
//import { ChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

// Components Routing
import { ProfessorRoutingModule } from './professor-routing.module';
import { ChallengesComponent } from './challenges/challenges.component';
import { ProfessorComponent } from './professor.component';
import { CourseComponent } from './course/course.component';



@NgModule({
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    CollapseModule,
    BsDropdownModule,
    PaginationModule,
    ModalModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxPaginationModule
    //MDBBootstrapModule.forRoot(),
  ],
  declarations: [
    ProfessorComponent,
    CourseComponent,
    ChallengesComponent,
  ]
})
export class ProfessorModule { }
