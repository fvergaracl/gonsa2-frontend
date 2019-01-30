import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-p-desafio-editar',
  templateUrl: './p-desafio-editar.component.html',
  styleUrls: ['./p-desafio-editar.component.css']
})
export class PDesafioEditarComponent implements OnInit {
  // localStorage.getItem('school')
  desafioAEditar: any;
  // id_desafio: any;
  desafiourl: any;
  fotosubida: boolean;
  editorConfig: any;
  dropdownSettings: any;
  desafiocategoria: any;
  dropdownList: any;
  categoriasopciones: any;
  desafiotitulo: any;
  desafioresumen: any;
  desafiodescripcion: any;
  desafioobjetivos: any;
  constructor(public http: HttpClient,
    public _loginService: LoginService) {
    this.desafioAEditar = {title: localStorage.getItem('title'),
                           photourl: localStorage.getItem('photourl'),
                           summary: localStorage.getItem('summary'),
                           description: localStorage.getItem('description'),
                           aim: localStorage.getItem('aim'),
                           category: localStorage.getItem('category') };
  }
  onSelectFile(event) { // called each time file input changes
    this.fotosubida = false;
    this.desafiourl = null;
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        reader.onload = (event:any) => { // called once readAsDataURL is completed
          this.desafiourl = event.target.result;
          this.fotosubida = true;
        };
      }
  }
  obtenertodaslascategorias() {
    let tempp_array = []
    this.categoriasopciones = ['asd']
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.get( this._loginService.getUrlApi() +'getallcategories', httpOptions).subscribe(data => {
      if (data['code'] === 200){
        for(let i=0; i<data['categories'].length; i++){
          tempp_array.push(data['categories'][i][0])
        }
        localStorage.setItem('categories', JSON.stringify(tempp_array));
      }
    });
    console.log(localStorage.getItem('categories'));
    let cats = JSON.parse(localStorage.getItem('categories'));
    this.dropdownList = []
    for(let i=0; i<cats.length; i++){
      this.dropdownList.push(cats[i])
    }
  }


  editarDesafio() { // Arreglar los datos que se envian
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    console.log('Entro a la edición');
    let data = {idchallenge: Number(localStorage.getItem('id_desafio')),
                  title: this.desafiotitulo,
                  photourl: this.desafiourl,
                  summary: this.desafioresumen,
                  description: this.desafiodescripcion,
                  aim: this.desafioobjetivos,
                  category: this.desafiocategoria[0]};
    console.log(data);

    const req = this.http.post(this._loginService.getUrlApi() + '/class/edit_challenge',
   data, httpOptions )
    .subscribe(res => {
      console.log(res);
      if (res['code'] === 200) {
        document.getElementById('modaldashboardtitulo').innerHTML = 'Cambio exitoso';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: green;"></i> '
        +  'Desafio editado';
        document.getElementById('activarmodaldashboard').click();
        console.log('Enviado correctamente');
      } else {
        console.log('Algo salio mal :c');
        document.getElementById('modaldashboardtitulo').innerHTML = 'Error!';
        document.getElementById('modaldashboardtexto').innerHTML = '<i class="fa fa-check" style="color: red;"></i> '
        +  'No se pudo modificar el desafio';
        document.getElementById('activarmodaldashboard').click();
   }
    });
  }
  ngOnInit() {
     // this.id_desafio = localStorage.getItem('id_desafio');
     this.editorConfig = {
      "editable": true,
      "spellcheck": true,
      "height": "auto",
      "minHeight": "100",
      "width": "auto",
      "minWidth": "0",
      "translate": "yes",
      "enableToolbar": true,
      "showToolbar": true,
      "placeholder": "Ingresa la Descripción del desafío...",
      "imageEndPoint": "",
      "toolbar": [
          ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
          ["fontName", "fontSize", "color"],
          ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
          ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
          ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"]
      ]
    };
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      searchPlaceholderText: 'Buscador',
      allowSearchFilter: true
    };
    this.desafiocategoria =[];
    this.obtenertodaslascategorias()
  }

}
