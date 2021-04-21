import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import Swal from 'sweetalert2';
declare var require: any;
declare var jQuery: any;


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
  Consulta_busqueda: any;
  resBUSQUEDASRELACIONADAS: any;
  resLIBRERIA: any;
  cantidadResultado: number;

  constructor(public http: HttpClient, public router: Router, public _LoginService: LoginService) {
    this.noF = true;
    this.cantidadResultado = this._LoginService.getCantidadResultados() 
   }


  LibreriaEstudiante() {
    let urlparaverificar = [];
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
        localStorage.setItem('urlparaverificar', JSON.stringify(urlparaverificar));
     } else {
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
    const id = localStorage.getItem('idsidebar');
    const accion = 'block';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    const data = {idchallenge: id , text: textLibreria, url: urlLibreria, action: accion, consulta: this.Consulta_busqueda};
    this.http.post( this._LoginService.getUrlApi() + '/library/accion', data, httpOptions).subscribe(res => {
      if (res['code'] === 200) {
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
    }
    });
  }



  EliminarApunte(indice) {
    const iddd = 'icon' + indice;
    document.getElementById(iddd).classList.remove('fa-heart');
    document.getElementById(iddd).classList.add('fa-heart-o');
  }

  ConsultaEstudiante(busqueda: any) {
    let boo: any;
    this.show = true;
    // let boo: Boolean;
    this.Consulta_busqueda = busqueda
    let resBusqueda = [];
    let resBusquedasRelacionadas = [];
    const id = localStorage.getItem('idsidebar');
    busqueda = encodeURIComponent(busqueda).replace(/[!'()]/g, escape).replace(/\*/g, '%2A');
    // for (let i = 0; i < busqueda.length; i++) {
    //   busqueda = busqueda.replace(' ', '%20');
    // }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };

    this.http.get( this._LoginService.getUrlApi() + '/search_bing/' + id + '/' + busqueda + '', httpOptions).subscribe(data => {
      if (data['code'] === 200) {
// resBusqueda = data['message']['webPages']['value'];
        for (let i = 0; i < data['message']['webPages']['value'].length; i++) {

          const na =  data['message']['webPages']['value'][i].name;
          const sn =  data['message']['webPages']['value'][i].snippet;
          const ur = data['message']['webPages']['value'][i].url;
          let position= i;
          // boo = this.Esdelalibreria(web);
          const re = {name: na, snippet: sn, url: ur, position: position};
          // , esta: boo
        resBusqueda.push(re);
          this.resBUSQUEDA = resBusqueda;
        }
// this.resBUSQUEDA = data['message']['webPages']['value'];
// console.log(this.resBUSQUEDA);
       // busquedas relacionadas
       if (data['message']['relatedSearches']) {
           resBusquedasRelacionadas = data['message']['relatedSearches']['value'];
          this.resBUSQUEDASRELACIONADAS = resBusquedasRelacionadas;
       }

// console.log(this.resBUSQUEDASRELACIONADAS);

       // fin de busquedas relacionadas
     } else {
      Swal.fire({
        title: 'Error ' + data['code'] + '!',
        text: 'Vuelve a intentar con otra búsqueda',
        type: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
    }
    });

  }
  Esdelalibreria( web: any) {
    const array = localStorage.getItem('urlparaverificar');

    if (array.indexOf(web) !== -1) {
      return true;
    }
    else {
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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
   const data = {idchallenge: id, solution: respuesta};
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
        this.router.navigate(['estudiante/tareas']);
      } else {
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
  const data = {idchallenge: id, text: text, url: url, action: accion,};
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
  }
  });

}

guardarRepuestaEstudiante(text: any) {
    const id = Number (localStorage.getItem('idsidebar'));
    const data = {idchallenge: id, solution: text };


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.post( this._LoginService.getUrlApi() + '/new_response', data, httpOptions).subscribe(res => {
      if (res['code'] === 200) {
        Swal.fire({
          title: 'Respuesta guardada correctamente',
          type: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
      } else {
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

    indice = indice + 1;
    position=position+1;
    indice = indice.toString();
    let data = {data:{evento: 'click', link: {titulo: titulo, posicion: position}}};

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.post( this._LoginService.getUrlApi() + '/reg_event', data, httpOptions).subscribe(res => {
      if (res['code'] === 200) {
      }else{
      }
  });
}
AbrirPesta(url: any) {
  let iMyWidth;
  let  iMyHeight;

iMyWidth = (window.screen.width / 4) - (120);

iMyHeight = (window.screen.height / 3) - (100);

  window.open(url, '_blank', 'location=2,status=1,scrollbars=1,width=1000px,height=500px,resizable=yes,left='
  + iMyWidth + ',top=' + iMyHeight + ',screenX=' + iMyWidth + ', screenY=' + iMyHeight +'');

}


  ngOnInit() {
    this.LibreriaEstudiante();
  }

}
