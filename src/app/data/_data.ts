export const professor: any = [
    {
        id:1,
        name:'María Josefina Echeverría',
        school:'Santa María la Blanca, Valdivia',
        rol: 'Profesor'
    },
    {
        id:2,
        name:'Cristian Olivares',
        school:'Universidad Austral de Chile',
        rol: 'Profesor'
    },
    {
        id:3,
        name:'Felipe Vergara',
        school:'Universidad Austral de Chile',
        rol: 'Profesor / Laborante'
    },
    {
        id:4,
        name:'Fabián Torrealba',
        school:'Santa María la Blanca',
        rol: 'Profesor'
    },
];


export const challenges: any = [
        {
            id: 1,
            title:'VIH en Chile',
            details: "Los estudiantes deben buscar cual es el número exacto de las personas que viven actualmente con VIH",
            objetive : "Buscar el número de personas con VIH",
            date : "07/04/2019",
            code : "Código: 2526-PRUE",
            category: 'Actualidad',
          }, {
            id: 2,
            title:'Acoso Cibernético',
            details: "Los estudiantes deben buscar cuales son las consecuencias del acoso cibérnetico",
            objetive : "Buscar las consecuencias del acoso",
            date : "07/04/2019",
            code : "Código: 2092-PRUE",
            category: 'Actualidad',
          }, {
            id: 3,
            title:'Crimen en Chile',
            details: "Los estudiantes deben crear un plan para reducir el crimen",
            objetive : "Buscar piezas que respalden su plan",
            date : "07/04/2019",
            code : "Código: 2541-PRUE",
            category: 'Actualidad',
        }, 
];

export const courses: any = [
        {
            id:1,
            name: 'Santa María 7°A',
            id_professor:1,
            school: 'Santa María la Blanca, Valdivia',
            students: 15,
            challenge_number:3
        },
        {
            id:2,
            name: 'Santa María 7°B',
            id_professor:1,
            school: 'Santa María la Blanca, Valdivia',
            students: 18,
            challenge_number:3
        },
        {
            id:3,
            name: 'Santa María 8°A',
            id_professor:1,
            school: 'Santa María la Blanca, Valdivia',
            students: 17,
            challenge_number:3
        },
    
];

export const course_challenges: any = [
    {
        id_challenge:1,
        id_course:1,
        seen:15,
        sent:13
    },
    {
        id_challenge:2,
        id_course:1,
        seen:15,
        sent:15
    },
    {
        id_challenge:3,
        id_course:1,
        seen:14,
        sent:9
    },
    {
        id_challenge:1,
        id_course:2,
        seen:18,
        sent:15
    },
    {
        id_challenge:2,
        id_course:2,
        seen:18,
        sent:17
    },
    {
        id_challenge:3,
        id_course:2,
        seen:16,
        sent:16
    },
    {
        id_challenge:1,
        id_course:3,
        seen:17,
        sent:15
    },
    {
        id_challenge:2,
        id_course:3,
        seen:17,
        sent:16
    },
    {
        id_challenge:3,
        id_course:3,
        seen:14,
        sent:8
    },
];
// JOIN DE CHALLENGES & COURSE_CHALLENGES
export const challenges_by_course: any = [
    {
        id_challenge: 1,
        id_course: 1,
        title:'VIH en Chile',
        details: "Los estudiantes deben buscar cual es el número exacto de las personas que viven actualmente con VIH",
        objetive : "Buscar el número de personas con VIH",
        date : "07/04/2019",
        category: 'Actualidad',
        seen:15,
        sent:13
      }, {
        id_challenge: 2,
        id_course: 1,
        title:'Acoso Cibernético',
        details: "Los estudiantes deben buscar cuales son las consecuencias del acoso cibérnetico",
        objetive : "Buscar las consecuencias del acoso",
        date : "07/04/2019",
        category: 'Actualidad',
        seen:15,
        sent:15
      }, {
        id_challenge: 3,
        id_course: 1,
        title:'Crimen en Chile',
        details: "Los estudiantes deben crear un plan para reducir el crimen",
        objetive : "Buscar piezas que respalden su plan",
        date : "07/04/2019",
        category: 'Actualidad',
        seen:14,
        sent:9
    }, 
];