import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  challenges,
  courses,
  professor,
  course_challenges,
  challenges_by_course
} from '../../data/_data';
import {
  CourseComponent
} from './course/course.component';

@Component({
  templateUrl: 'professor.component.html'
})
export class ProfessorComponent implements OnInit {
  challenges_list: Array<any> = challenges;
  course_challenges: Array<any> = course_challenges;
  courses: Array<any> = courses;
  professor: any = professor[0];

  radioModel: string = 'Month';


  public changeAnalitics() {

  }

  analitics: FormGroup;

  public openCourse(course_name: string, professor_name: string) {
    let course = courses.find(c => c.id_professor === this.professor.id);
    let challenges_l = challenges_by_course.find(c => c.id_course === course.id); 
    this.router.navigate(['/professor/course'],{state:{'course':course, 'challenges': challenges_l}});
  }


  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.analitics = new FormGroup({});

  }
}
