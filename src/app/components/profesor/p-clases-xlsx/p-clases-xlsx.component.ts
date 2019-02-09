import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-p-clases-xlsx',
  templateUrl: './p-clases-xlsx.component.html',
  styleUrls: ['./p-clases-xlsx.component.css']
})
export class PClasesXLSXComponent implements OnInit {
  url: any;
  data: any;
  rABS: any;
  constructor() {
  }

  ngOnInit() {
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

        const first_sheet_name = workbook.SheetNames[0];

        const worksheet = workbook.Sheets[first_sheet_name];
        // console.log(XLSX.utils.sheet_to_json(worksheet));

        let dataJSON = XLSX.utils.sheet_to_json(worksheet);

        console.log(dataJSON);

      };
      if(rABS) {
        reader.readAsBinaryString(f);
      } // else {reader.readAsArrayBuffer(f);}
    }
    let archivo = document.getElementById('xlf');
    if (archivo) {
      archivo.addEventListener('change', handleFile, false);
    } else {console.log('No se puede;'); }
}

}
