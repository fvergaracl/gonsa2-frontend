import { Component, ViewChild, Input, Output } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
  @ViewChild('largeModal', {static: false}) public largeModal: ModalDirective;
  isCollapsed: boolean = false;
  course:any=[];
  challenges:any=[];
  searchTodos: any;
  pd:any;
  desafio: string = "Seleccione Desafío";
  details: string = "Seleccione Desafío";
  objetive: string = "Seleccione Desafío";
  date: string = "Seleccione Desafío";
  code: string = "Seleccione Desafío";
  category: string = " ";

  nick_eval:string =  " ";
  name_eval:string = " ";
  date_eval:string = " ";
  mark_eval: any;
  answer_eval: string =" ";

  tableData =[];
  students = [
    {
      nick: 'abraum',
      name: 'Analouisse Elisabeth Braum-Holts',
      rut: '19.934.232-1',
      date_send: '15:43',
      calification: 6.5,
      state: 'Evaluado',
      answer: " Yo opino que opinar es divertido y ..."
    },
    {
      nick: 'acasas',
      name: 'Armando Casas Dávila',
      rut: '19.924.124-3',
      date_send: '15:01',
      calification: 4.0,
      state: 'Evaluado',
      answer: " Y ahora tuuu te vas, así como si nada,  ..."
    },
    {
      nick: 'ajerez',
      name: 'Alfredo Matías Jerez Pérez',
      rut: '19.901.231-4',
      date_send: '15:21',
      calification: 5.5,
      state: 'Evaluado',
      answer: " Mientras preparo el desayuno, me siento terriblemente soolaaa ..."
    },
    {
      nick: 'cleon',
      name: 'Carlos Eliseo León Muñoz',
      rut: '18.934.900-k',
      date_send: '15:41',
      calification: 5.5,
      state: 'Evaluado',
      answer: " Yo opino que opinar es divertido y ..."
    },
    {
      nick: 'dromero',
      name: 'David Hermin Romero Klaus',
      date_send: '-',
      rut: '18.994.982-4',
      calification: 0.0,
      state: 'No envía',
      answer: ""
    },
    {
      nick: 'ezapata',
      name: 'Ester Isamar Zapata del Campo',
      date_send: '-',
      rut: '19.998.022-9',
      calification: 0.0,
      state: 'No envía',
      answer: ""
    },
  ];

  challengeData = [
    {
      id: 1,
      title:'VIH en Chile',
      details: "Los estudiantes deben buscar cual es el número exacto de las personas que viven actualmente con VIH",
      objetive : "Buscar el número de personas con VIH",
      date : "07/04/2019",
      code : "Código: 2526-PRUE",
      category: 'Actualidad',
      seen: 38,
      sent: 32
    }, {
      id: 2,
      title:'Acoso Cibernético',
      details: "Los estudiantes deben buscar cuales son las consecuencias del acoso cibérnetico",
      objetive : "Buscar las consecuencias del acoso",
      date : "07/04/2019",
      code : "Código: 2092-PRUE",
      category: 'Actualidad',
      seen: 41,
      sent: 40
    }, {
      id: 3,
      title:'Crimen en Chile',
      details: "Los estudiantes deben crear un plan para reducir el crimen",
      objetive : "Buscar piezas que respalden su plan",
      date : "07/04/2019",
      code : "Código: 2541-PRUE",
      category: 'Actualidad',
      seen: 41,
      sent: 40
  }];

  constructor(public router: Router) {
    
  }

  selectDesafio(str: string) {
    this.isCollapsed = !this.isCollapsed;
    let found = this.challengeData.find(chall => chall.title === str);
    this.desafio = "Desafío: "+str;
      this.details = found.details;
      this.objetive = found.objetive
      this.date = found.date;
      this.code = found.code;
      this.tableData = this.students;
      this.category = found.category;
  }

  evaluate(nick: string){
    let found = this.students.find(std => std.nick === nick);
    this.name_eval = found.name;
    this.nick_eval = nick;
    this.answer_eval = found.answer;
    this.date_eval = found.date_send;
    this.largeModal.show();
  }


  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
}