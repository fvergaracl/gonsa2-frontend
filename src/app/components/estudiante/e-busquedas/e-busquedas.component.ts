import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';


@Component({
  selector: 'app-e-busquedas',
  templateUrl: './e-busquedas.component.html',
  styleUrls: ['./e-busquedas.component.css']
})
export class EBusquedasComponent implements OnInit {
  show: boolean;
  showH: boolean;
  noF: boolean;
  siF: boolean;

  busqueda: any;
  respuesta: [];
  resBUSQUEDA: any;
  resLIBRERIA: any;
  constructor(public http: HttpClient, public router: Router, public _LoginService: LoginService) {
    this.noF = true;

   }


  LibreriaEstudiante() {
    console.log('libreria estudiante:');
    const id = localStorage.getItem('idsidebar');
    this.showH = true;
    let resLibreria = [];
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.get( this._LoginService.getUrlApi() + '/getallmylibrary/' + id, httpOptions).subscribe(data => {
      if (data['code'] === 200) {
        for (let i = 0; i < data['message'].length; i++) {
          if (data['message'][i][3] == '0') {
            let tex = data['message'][i][0];
            let url = data['message'][i][1];
            let item = {text: tex, url: url};
            resLibreria.push(item);
        }
      }
      // resLibreria = data['message'];
        this.resLIBRERIA = resLibreria;
        console.log(this.resLIBRERIA);
     } else {console.log(data['code']);
    }
    });
    console.log(this.resLIBRERIA);
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
    const iddd = 'icon' + indice;
    document.getElementById(iddd).classList.remove('fa-heart-o');
    document.getElementById(iddd).classList.add('fa-heart');
    console.log('guardar apunte');
    console.log('se guardare la urla y text: ' + urlLibreria, textLibreria);
    const id = localStorage.getItem('idsidebar');
    const accion = 'block';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    let data = {idchallenge: id , text: textLibreria, url: urlLibreria, action: accion};
    console.log(data);
    this.http.post( this._LoginService.getUrlApi() + '/library/accion', data, httpOptions).subscribe(res => {
      if (res['code'] === 200 || res['message'] === 'The resource has been successfully modified') {
        console.log('se agrego a la libreria'); this.LibreriaEstudiante();

     } else if (res['message'] === 'You are not allowed to access this page') {
       console.log('aqui meto la funcion, aca vaaaa');
       this.AgregarApunteNuevo(textLibreria, urlLibreria);
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
    this.show = true;
    let resBusqueda = [];
    console.log(busqueda);
    const id = localStorage.getItem('idsidebar');
    console.log(id);
    for (let i = 0; i < busqueda.length; i++) {
      busqueda = busqueda.replace(' ', '/&');
    }
    console.log(busqueda);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };

    this.http.get( this._LoginService.getUrlApi() + '/search_bing/' + id + '/ejecucion', httpOptions).subscribe(data => {
      if (data['code'] === 200) {
        resBusqueda = data['message']['relatedSearches']['value'];
        this.resBUSQUEDA = resBusqueda;
        console.log(this.resBUSQUEDA);
     } else {console.log(data['code']);
    }
    });
    this.LibreriaEstudiante();
  }


  TerminarDesafio(respuesta: any) {
    const id = Number(localStorage.getItem('idsidebar'));
    console.log(respuesta);
    console.log(id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
   let data = {idchallenge: id, solution: respuesta};
    console.log(data);
    this.http.post( this._LoginService.getUrlApi() + '/finish_challenge', data, httpOptions).subscribe(res => {
      if (res['code'] === 200) {
        document.getElementById('modaldashboardtitulo').innerHTML = 'Desafio terminado';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: green;"></i> '
        +  'respuesta enviada';
        document.getElementById('activarmodaldashboard').click();
        document.getElementById('bClose').setAttribute('onclick', 'location.href="/estudiante/tareas"');
        console.log('Enviado correctamente');
      } else {
        console.log('Algo salio mal :c');
        document.getElementById('modaldashboardtitulo').innerHTML = 'Error!';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-exclamation" style="color: red;"></i> '
        +  'Error al enviar respuesta';
        document.getElementById('activarmodaldashboard').click();
   }
  });
}

removeLibreria(text: any, url: any) {
  console.log(text);
  console.log(url);
  const id = Number (localStorage.getItem('idsidebar'));
  const accion = 'remove';
  let data = {idchallenge: id, text: text, url: url, action: accion};
  console.log(data);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'JWT ' + localStorage.getItem('token')
    })
  };
  this.http.post( this._LoginService.getUrlApi() + '/library/accion', data, httpOptions).subscribe(res => {
    if (res['code'] === 500) {
      console.log('se borro el recurso');
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
document.getElementById('modaldashboardtitulo').innerHTML = 'Respuesta Guardada';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: green;"></i> '
        +  'Respuesta guardada';
        document.getElementById('activarmodaldashboard').click();
        console.log('Guardada correctamente');

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'JWT ' + localStorage.getItem('token')
    //   })
    // };
    // this.http.post( this._LoginService.getUrlApi() + '/finish_challenge', data, httpOptions).subscribe(res => {
    //   if (res['code'] === 500) {
    //     console.log('respuesta guardada');
        
    //   } else {console.log('respuesta no guardada');
            // console.log('Algo salio mal :c');
            // document.getElementById('modaldashboardtitulo').innerHTML = 'Error!';
            // document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-exclamation" style="color: red;"></i> '
            // +  'Error al enviar respuesta';
            // document.getElementById('activarmodaldashboard').click();
    // }
    // });

  }

    // this.router.navigate(['/estudiante/tareas']);


  ngOnInit() {

  }

}
