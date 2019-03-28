import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-p-clases-detalles',
  templateUrl: './p-clases-detalles.component.html',
  styleUrls: ['./p-clases-detalles.component.css']
})
export class PClasesDetallesComponent implements OnInit {
  alumno: any;
  idclase: any;
  estudiantes: any;
  rolStudent: any;
  pd: any;
  pdi: any;
  pdj: any;
  desafio: any;
  allchallenges: any;
  constructor(public router: Router, public http: HttpClient,
    public _loginService: LoginService) {
    this.idclase = localStorage.getItem('id_desafio'); // id clase
  }

  traerUsuariosRolStudent() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    const reg = this.http.get(this._loginService.getUrlApi() + 'getallnickstudents', httpOptions )
    .subscribe(res => {
      console.log(res);
      if (res['code'] === 200 ) {
        this.rolStudent = res['data'];   // Desde por aca
        console.log('Los nicks de los estudiantes: ');
        console.log(this.rolStudent[0]);
      } else {console.log('Error!!!'); }
    });

  }
  visualizarAlumnos() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    const req = this.http.get(this._loginService.getUrlApi() + 'getstudentinclass/' + this.idclase, httpOptions )
    .subscribe(res => {
      console.log(res);
      if (res['code'] === 200) {
        console.log('Ningun problema detectado, mostrando c');
        this.estudiantes = res['users'];
        console.log(this.estudiantes);
      }
    });
  }
  agregarAlumno() {
    this.idclase = localStorage.getItem('id_desafio');
    this.router.navigate(['/profesor/clases/agregaralumno']);
  }
  eliminarAlumno(alumno: any) {
    this.idclase = localStorage.getItem('id_desafio');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    const data = {class: this.idclase, student: alumno };

    const req = this.http.post(this._loginService.getUrlApi() + '/class/remove_student', data, httpOptions )
    .subscribe(res => {
      console.log(res);
      if (res['code'] === 200) {
        console.log('Alumno eliminado satisfactoriamente');
        document.getElementById('modaldashboardtitulo').innerHTML = 'Exito';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: green;"></i> '
        +  'Alumno eliminado de la clase satisfactoriamente';
        document.getElementById('activarmodaldashboard').click();

      } else {
        console.log('Algo salio mal');
        document.getElementById('modaldashboardtitulo').innerHTML = 'Error';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: green;"></i> '
        +  'No se pudo eliminar el alumno';
        document.getElementById('activarmodaldashboard').click();
    }
    });
  }
  verCargarXLSX() {
    document.getElementById('xlf').style.display = 'block';
}
separador(antiguos: any, nuevos: any) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'JWT ' + localStorage.getItem('token')
    })
  };
  for (let c = 0; c < antiguos.length; c++) {
    const datos = {class: this.idclase, student: antiguos[c]};
    const req = this.http.post(this._loginService.getUrlApi() + '/class/add_student', datos, httpOptions )
    .subscribe(res => {
    console.log(res);
  });
  }
  if (nuevos.length !== 0) {
    const data = {newstudents: nuevos
    };
    const req = this.http.post( this._loginService.getUrlApi() + 'createstudents', data, httpOptions)
    .subscribe(res => {
      console.log(res);
      if (res['code'] === 200) {
        console.log('Exito!!!!');
      }
    });
  }
  localStorage.removeItem('dataJSON');
}
  cargarEstudiantes() {
    console.log('Entro!!!!!!');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    let i = localStorage.getItem('dataJSON');
    let oldStudents = [];
    let newStudents = [];
    console.log('La data en JSON...');
    // i = {estudiantes: JSON.parse(i) };

    // console.log(i);

    let newStudentss = {s: JSON.parse(i)};
    // console.log(newStudentss.s[0].Nick);

    for (let c = 0; c < newStudentss.s.length; c++) {
        console.log('en el primer for');
        // console.log(newStudentss.s[c].Nick);
        let student = false;
        for (let d = 0; d < this.rolStudent.length; d++) {
          console.log('en segundo for');
          // console.log(this.rolStudent[d][0]);
          // console.log(newStudentss.s[c].Nick + ' ' + this.rolStudent[d][0]);
          if ((newStudentss.s[c].nick).toLowerCase() === this.rolStudent[d][0].toLowerCase()) {
            console.log('Entro al segundo for con un true ');
            student = true;
            break;
          }
        }
        if (student) { // Significa que el estudiante existe y hay que agregarlo a la clase
          oldStudents.push(newStudentss.s[c].nick.toLowerCase());
          // Enviar estudiantes o a la creacion o hacerlo aca.
        } else { newStudents.push(newStudentss.s[c]); }
    }
    console.log('Salio de los for... Estudiantes viejos: ');
    console.log(oldStudents);
    console.log('Estudiantes nuevos: :');
    console.log(newStudents);
    this.separador(oldStudents, newStudents);


    // Se tiene que crear estudiantes terminado el for y luego asignarlos a la clase

  }
  obtenerDesafiosClase() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    console.log('el id de la clase: ' + this.idclase);
    console.log('tipo de variable: ' + typeof(this.idclase));
    const req = this.http.get(this._loginService.getUrlApi() + 'getallchallengesinclass/' + this.idclase, httpOptions)
    .subscribe(res => {
      console.log('la respuesta fue: ' + res['challenges']);
      console.log('el largo de la respuesta: ' + res['challenges'].length);
      this.desafio = new Array(res['challenges'].length);

      for (let i = 0; i < res['challenges'].length; i++) {
        this.desafio[i] = new Array(3);
        this.desafio[i][0] = res['challenges'][i][0]
        this.desafio[i][1] = res['challenges'][i][1];
        this.desafio[i][2] = res['challenges'][i][9];
      }
      console.log('informacion en el arreglo: ');
      console.log(this.desafio);
    });

    this.http.get(this._loginService.getUrlApi() + 'getallchallenges', httpOptions)
    .subscribe( res => {
      if (res['code'] === 200) {
        this.allchallenges = new Array(res['challenges'].length);
        for (let i = 0; i < res['challenges'].length; i++) {
          this.allchallenges[i] = new Array(3);
          this.allchallenges[i][0] = res['challenges'][i][0]
          this.allchallenges[i][1] = res['challenges'][i][2];
          this.allchallenges[i][2] = res['challenges'][i][9];
        }
        console.log('Todos los desafios: ...');
        console.log(this.allchallenges);
      }
    });
  }
  vincularDesafioClase(desafioid: any) {
    console.log(desafioid);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    let data = {idclass: this.idclase, idchallenge: desafioid};
    this.http.post(this._loginService.getUrlApi() + 'class/add_challenge', data, httpOptions)
    .subscribe( res => {
      if (res['code'] === 500) {
        document.getElementById('modaldashboardtitulo').innerHTML = 'Error al ingresar';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-exclamation-triangle" style="color: red;"></i> '
        +  res['data'];
        document.getElementById('activarmodaldashboard').click();
      } else {
        if (res['code'] === 200) {
          document.getElementById('modaldashboardtitulo').innerHTML = 'Desafio agregado correctamente';
          document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: green;"></i> '
          +  res['data'];
          document.getElementById('activarmodaldashboard').click();
        }
      }
    });
  }

  ngOnInit() {
    this.traerUsuariosRolStudent();
    this.visualizarAlumnos();
    this.obtenerDesafiosClase();
    interface HTMLInputEvent extends Event {
      target: HTMLInputElement & EventTarget;
    }
    let rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer
    function handleFile(e: HTMLInputEvent) {
      let files = e.target.files;
      let f = files[0];
      let reader = new FileReader();
      reader.onload = (event: Event) => {
        let data = reader.result;
        if(!rABS) {
          // data = new Uint8Array(data);
        }
        let workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'});
        /* DO SOMETHING WITH workbook HERE */
        console.log(workbook);
        let first_sheet_name = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[first_sheet_name];
        // console.log(XLSX.utils.sheet_to_json(worksheet));
        this.dataJSON = XLSX.utils.sheet_to_json(worksheet);
        console.log(this.dataJSON);
        console.log(this.dataJSON.length);
        localStorage.setItem('dataJSON', this.dataJSON);
        // this.cargarEstudiantes(this.dataJSON);
        // localStorage.setItem('dataJSON', this.dataJSON);
        document.getElementById('cargar').style.display = '';
        localStorage.setItem('dataJSON', JSON.stringify(this.dataJSON));
      };
      if (rABS) {
        reader.readAsBinaryString(f);
      } // else {reader.readAsArrayBuffer(f); }
  }
    let archivo = document.getElementById('xlf');
    if (archivo) {
      archivo.addEventListener('change', handleFile, false);
    } else {console.log('No se puede;'); }
  }
}
