import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import Swal from 'sweetalert2';
declare var require: any;


@Component({
  selector: 'app-e-busquedas',
  templateUrl: './e-busquedas.component.html',
  styleUrls: ['./e-busquedas.component.css']
})
export class EBusquedasComponent implements OnInit {
  show: boolean;
  showH: boolean;
  noF: boolean;
  siF = false;

  busqueda: any;
  respuesta: [];
  resBUSQUEDA: any;
  resBUSQUEDASRELACIONADAS: any;
  resLIBRERIA: any;
  constructor(public http: HttpClient, public router: Router, public _LoginService: LoginService) {
    this.noF = true;

   }


  LibreriaEstudiante() {
    let urlparaverificar = [];
    console.log('libreria estudiante:');
    const id = localStorage.getItem('idsidebar');
    this.showH = true;
    const resLibreria = [];
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.get( this._LoginService.getUrlApi() + '/getallmylibrary/' + id, httpOptions).subscribe(data => {
      if (data['code'] === 200) {
        for (let i = 0; i < data['message'].length; i++) {
          if (data['message'][i][3] ===  '0') {
            const tex = data['message'][i][0];
            const url = data['message'][i][1];
            const item = {text: tex, url: url};
            resLibreria.push(item);
            urlparaverificar.push(url);
        }
      }
      // resLibreria = data['message'];
        this.resLIBRERIA = resLibreria;
        console.log(this.resLIBRERIA);
        localStorage.setItem('urlparaverificar', JSON.stringify(urlparaverificar));
     } else {console.log(data['code']);
    }
    });
    return (resLibreria);
  }

// agregar apunte
AgregarApunteNuevo (text: any, url: any) {
  const id = localStorage.getItem('idsidebar');
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'JWT ' + localStorage.getItem('token')
    })
  };
  const data = {idchallenge: id , text: text, url: url};
  this.http.post( this._LoginService.getUrlApi() + '/library/add' , data, httpOptions).subscribe(res => {
    if (res['code'] === 200) {
      console.log('se agrego un nuevo documento, ejecutato la funncion libreria ');
      this.LibreriaEstudiante();

    }
  });
}
// termino de agregar apunte

  GuardarApunte(urlLibreria: any, textLibreria: any, indice: any) {
    // this.siF = true;
    const iddd = 'icon' + indice + '_relleno';
    const idd = 'icon' + indice;
    document.getElementById(iddd).setAttribute('style', 'display:none');
    document.getElementById(idd).setAttribute('style', 'display:visible');
    // document.getElementById(iddd).classList.add('fa-heart');
    // console.log('guardar apunte');
    let accents = require('remove-accents');
    textLibreria = accents.remove(textLibreria);
    // biuidsuiusdiusd
    console.log('se guardare la urla y text: ' + urlLibreria, textLibreria);
    const id = localStorage.getItem('idsidebar');
    const accion = 'block';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    const data = {idchallenge: id , text: textLibreria, url: urlLibreria, action: accion};
    console.log(data);
    this.http.post( this._LoginService.getUrlApi() + '/library/accion', data, httpOptions).subscribe(res => {
      if (res['code'] === 200) {
        console.log('se agrego a la libreria');
        Swal.fire({title: 'Documento guardado',
          showConfirmButton: false,
          timer: 1000,
          type: 'success'});
        this.LibreriaEstudiante();
     } else if (res['code'] === 500) {
       this.AgregarApunteNuevo(textLibreria, urlLibreria);
         Swal.fire({title: 'Documento guardado',
         timer: 1000,
         showConfirmButton: false,
         type: 'success'});
       this.LibreriaEstudiante();
     } else {
       console.log('no se agrego a libreria, hubo un problema');
       console.log(res['code']);
    }
    });
  }



  EliminarApunte(indice) {
    console.log('*****************************************************')
    console.log(indice);
    const iddd = 'icon' + indice;
    document.getElementById(iddd).classList.remove('fa-heart');
    document.getElementById(iddd).classList.add('fa-heart-o');
  }

  ConsultaEstudiante(busqueda: any) {
    Swal.fire({title: 'Cargando...',
    timer: 1500,
    showConfirmButton: false,
    onBeforeOpen: () => {
 Swal.showLoading(),100}
  });
    let boo: any;
    this.show = true;
    // let boo: Boolean;
    let resBusqueda = [];
    let resBusquedasRelacionadas = [];
     console.log(busqueda);
    const id = localStorage.getItem('idsidebar');
    console.log(id);
    busqueda = encodeURIComponent(busqueda);
    // for (let i = 0; i < busqueda.length; i++) {
    //   // busqueda = busqueda.replace(' ', '%20');
    // }
     console.log(busqueda);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };

    this.http.get( this._LoginService.getUrlApi() + '/search_bing/' + id + '/' + busqueda, httpOptions).subscribe(data => {
      if (data['code'] === 200) {

        for (let i = 0; i < data['message']['webPages']['value'].length; i++) {

          const na =  data['message']['webPages']['value'][i].name;
          const sn =  data['message']['webPages']['value'][i].snippet;
          const ur = data['message']['webPages']['value'][i].url;
          let position= i;
          // boo = this.Esdelalibreria(web);
          const re = {name: na, snippet: sn, url: ur, position: position};
          // , esta: boo
          console.log(re);
        resBusqueda.push(re);
          this.resBUSQUEDA = resBusqueda;
       }
// this.resBUSQUEDA = data['message']['webPages']['value'];
// console.log(this.resBUSQUEDA);
       // busquedas relacionadas
resBusquedasRelacionadas = data['message']['relatedSearches']['value'];
this.resBUSQUEDASRELACIONADAS = resBusquedasRelacionadas;
// console.log(this.resBUSQUEDASRELACIONADAS);

       // fin de busquedas relacionadas
     } else {console.log(data['code']);
    }
    });

  }
  Esdelalibreria( web: any) {
    console.log(web);
    const array = localStorage.getItem('urlparaverificar');

    if (array.indexOf(web) !== -1) {
      console.log('si esta en la libreria');
      return true;
    }
    else {
      console.log('no esta en la libreria');
      return false;
    }


  }
ConfirmarTermino(respuesta: any) {

  Swal.fire({
    title: 'Estas seguro que quieres terminar el desafío?',
    text: 'No se podra revertir',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, enviar'
  }).then((result) => {
    if (result.value) {
        this.TerminarDesafio(respuesta);
    }
  });
}
  TerminarDesafio(respuesta: any) {
    const id = Number(localStorage.getItem('idsidebar'));
    console.log(respuesta);
    console.log(id);
    console.log('se ejecuto terminar desafio');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
   const data = {idchallenge: id, solution: respuesta};
    console.log(data);
    console.log('desafio terminado');
    this.http.post( this._LoginService.getUrlApi() + '/finish_challenge', data, httpOptions).subscribe(res => {
      if (res['code'] === 200) {
        Swal.fire({
          title: 'Respuesta enviada correctamente',
          type: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
        this.router.navigate(['/estudiante/tareas']);
      } else {
        console.log('Algo salio mal :c');
              Swal.fire({
          title: 'Hubo un problema',
          type: 'error',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
   }
  });
}

removeLibreria(text: any, url: any, indice: any) {
    const iddd = 'icon' + indice + '_relleno';
    const idd = 'icon' + indice;
    document.getElementById(iddd).setAttribute('style', 'display:visible');
    document.getElementById(idd).setAttribute('style', 'display:none');
    let accents = require('remove-accents');
    text = accents.remove(text);
  // console.log(text);
  // console.log(url);
  const id = Number (localStorage.getItem('idsidebar'));
  const accion = 'remove';
  const data = {idchallenge: id, text: text, url: url, action: accion};
  // console.log(data);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'JWT ' + localStorage.getItem('token')
    })
  };
  this.http.post( this._LoginService.getUrlApi() + '/library/accion', data, httpOptions).subscribe(res => {
    if (res['code'] === 200) {
      // console.log('se borro el recurso');
      Swal.fire({title: 'Documento eliminado',
      timer: 1050,
      showConfirmButton: false,
      type: 'success'});
      this.LibreriaEstudiante();
    } else {
      console.log(res['code']);
      console.log('no se borro el recurso');
  }
  });

}

guardarRepuestaEstudiante(text: any) {
    console.log(text);
    const id = Number (localStorage.getItem('idsidebar'));
    const data = {idchallenge: id, solution: text };
    console.log(data);


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.post( this._LoginService.getUrlApi() + '/new_response', data, httpOptions).subscribe(res => {
      if (res['code'] === 200) {
        console.log('respuesta guardada');
        Swal.fire({
          title: 'Respuesta guardada correctamente',
          type: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
      } else {console.log('respuesta no guardada');
            console.log('Algo salio mal :c');
            Swal.fire({
              title: 'Hubo un problema',
              type: 'error',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'OK'
            });
    }
    });

  }

  Busquedarelacionada(text: any) {
    (<HTMLInputElement>document.getElementById('busqueda')).value = text;
  }
  RegistroEvent(url: any, titulo: any, indice: any, position: any) {
    console.log(url);
    // let documentos = document.getElementById('documentosi').getAttribute('values');
    console.log(position);
    console.log(titulo);
    indice = indice + 1;
    position=position+1;
    console.log('documento numero' + indice);
    indice = indice.toString();
    let data = {data:{evento: 'click', link: {titulo: titulo, posicion: position}}};
    console.log(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.post( this._LoginService.getUrlApi() + '/reg_event', data, httpOptions).subscribe(res => {
      if (res['code'] === 200) {
        console.log('click registrado');
      }else{console.log(res['code']);
      }
  });
}


  ngOnInit() {
    this.LibreriaEstudiante();
  }

}
