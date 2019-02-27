import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-p-desafio-crear',
  templateUrl: './p-desafio-crear.component.html',
  styleUrls: ['./p-desafio-crear.component.css']
})
export class PDesafioCrearComponent implements OnInit {
  constructor(public http: HttpClient,
    public _LoginService: LoginService) { }
  categoriasopciones:any;
  fotosubida:boolean;
  
  
  dropdownSettings:any;
  dropdownList:any;

  editorConfig:any;
  seleccionado:any;

  desafiotitulo:any;
  desafioresumen:any;
  desafiodescripcion:any;
  desafioobjetivos:any;
  desafiocategoria:any;
  desafiourl:any;

  onSelectFile(event) { // called each time file input changes
    this.fotosubida = false;
    this.desafiourl = null;
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        reader.onload = (event:any) => { // called once readAsDataURL is completed
          this.desafiourl = event.target.result;
          this.fotosubida = true;
        }
      }
  }

  creardesafio(){
    console.log(this.desafiourl)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    let data = {title: this.desafiotitulo,
                summary: this.desafioresumen,
                description: this.desafiodescripcion,
                aims: this.desafioobjetivos,
                photo: this.desafiourl,
                category: this.desafiocategoria[0]};
    console.log(data);
    const req = this.http.post(this._LoginService.getUrlApi()+ 'challenge/new', {
      title: this.desafiotitulo,
      summary: this.desafioresumen,
      description: this.desafiodescripcion,
      aims: this.desafioobjetivos,
      photo: this.desafiourl,
      category: this.desafiocategoria[0]
    }, httpOptions)
      .subscribe(
        res => {
          console.log(res)
          if (res['codigo'] === 200) {
            null
          } else if (res['codigo'] === 400) {
            null
          }
        },
        err => {
        }
      );
  }

  obtenertodaslascategorias(){
    let tempp_array = []
    this.categoriasopciones = ['asd']
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*',
        'Authorization': 'JWT ' + localStorage.getItem('token')
      })
    };
    this.http.get( this._LoginService.getUrlApi() +'getallcategories', httpOptions).subscribe(data => {
      if (data['code'] === 200){
        console.log(data);
        for(let i=0; i<data['categories'].length; i++){
          tempp_array.push(data['categories'][i][0])
        }
        localStorage.setItem('categories', JSON.stringify(tempp_array));
      }
    });
    console.log(localStorage.getItem("categories"))
    let cats = JSON.parse(localStorage.getItem("categories"));
    this.dropdownList = []
    for(let i=0; i<cats.length; i++){
      this.dropdownList.push(cats[i])
    }
  }

  ngOnInit() {
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
    }
    this.desafiocategoria =[];
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      searchPlaceholderText: 'Buscador',
      allowSearchFilter: true
    };
    document.getElementById('categoriadescripcion').innerText = ''
    this.fotosubida = false;
    this.obtenertodaslascategorias()
  }

}
