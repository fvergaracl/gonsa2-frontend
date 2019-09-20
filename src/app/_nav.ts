import { courses } from './data/_data';
import { CourseComponent } from './views/professor/course/course.component';
import { ChallengesComponent } from './views/professor/challenges/challenges.component';

interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

class Course{
  name: string;
  url: string;
  icon: string;
}
//brings the courses and add to NavBar
class coursesList{
  C: Array<Course>=[];
  constructor(){ this.get()}
  get(){
    courses.forEach(element => {
      let course = new Course();
      course.name = element.name;
      course.url= '/professor/course/';
      course.icon= 'icon-notebook';
      this.C.push(course);
    });
  };
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/professor',
    icon: 'icon-speedometer',

  },
  {
    title: false,
    name: 'Cursos'
  },
  {
    name: 'Mis Cursos',
    url: '/professor',
    icon: 'icon-book-open',
    children: new coursesList().C
  },
  {
    name: 'Admin Desafíos',
    url: '/professor/challenges',
    icon: 'icon-badge',
  },
  {
    name: 'Gráficos & Analíticas',
    url: '/analitics',
    icon: 'icon-pie-chart'
  },
  
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Mis Proyectos',
    url: '/projects',
    icon: 'icon-star',
    children: [
      {
        name: 'ABC',
        url: 'sample',
        icon: 'icon-star'
      },
     
    ]
  },
  
];
