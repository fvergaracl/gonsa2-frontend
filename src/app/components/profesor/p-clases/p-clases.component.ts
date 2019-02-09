import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-p-clases',
  templateUrl: './p-clases.component.html',
  styleUrls: ['./p-clases.component.css']
})
export class PClasesComponent implements OnInit {
  clases: any;
  dataJSON: any;

  constructor(public http: HttpClient, public router: Router,
    public _LoginService: LoginService) {
      this.clases = [];
    }
    obtenertodaslasclases() {
      this.clases = [];
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'JWT ' + localStorage.getItem('token')
          })
        };
        this.http.get( this._LoginService.getUrlApi() +'get_all_classes', httpOptions).subscribe(data => {
          if (data['code'] === 200) {
            this.clases = data['classes'];
            console.log(this.clases);
          }
        });
    }
    direccionarCrearClase() {
      this.router.navigate(['/profesor/clases/crear']);
    }
    editardesafio(id_desafio: any, school: any, identificator: any, clase: any, year: any ){
      console.log(id_desafio, school, identificator, clase, year);
      localStorage.setItem('id_desafio', id_desafio);
      localStorage.setItem('school', school);
      localStorage.setItem('identificator', identificator);
      localStorage.setItem('clase', clase);
      localStorage.setItem('year', year);
      console.log('entro al editar');
      this.router.navigate(['/profesor/clases/editar']);
    }
    visualizarClase(id_desafio: any, school: any, identificator: any, clase: any, year: any){
      console.log(id_desafio,school, identificator,clase, year);
      localStorage.setItem('id_desafio',id_desafio);
      localStorage.setItem('school',school);
      localStorage.setItem('identificator',identificator);
      localStorage.setItem('clase',clase);
      localStorage.setItem('year',year);
      console.log('visualizando clase...');
      this.router.navigate(['/profesor/clases/detalles']);
    }
    verCargarXLSX(){
        document.getElementById('xlf').style.display = 'block';
    }

    cargarEstudiantes(){
      console.log('Entro!!!!!!');
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'JWT ' + localStorage.getItem('token')
        })
      };
      let i = localStorage.getItem('dataJSON');
      let newStudents = {newstudents: JSON.parse(i)};
      console.log(newStudents);
      this.http.post( this._LoginService.getUrlApi() + 'createstudents', newStudents, httpOptions).subscribe(res => {
        console.log(res);
        if (res['code'] === 200) {
          console.log('Exito!!!!');
        }
      });
      localStorage.removeItem('dataJSON');
    }

    ngOnInit() {
      this.obtenertodaslasclases();
      // console.log(this.obtenertodaslasclases);

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
        if(rABS) {
          reader.readAsBinaryString(f);
        } // else {reader.readAsArrayBuffer(f); }
    }
      let archivo = document.getElementById('xlf');
      if (archivo) {
        archivo.addEventListener('change', handleFile, false);
      } else {console.log('No se puede;'); }
    }
}

