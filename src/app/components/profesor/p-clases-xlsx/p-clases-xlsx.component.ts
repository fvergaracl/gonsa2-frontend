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
  constructor() {
    this.url = '/assets/nomina_estudiantes_ejemplo.xlsx';

  /* set up async GET request */
  const req = new XMLHttpRequest();
  req.open('GET', this.url, true);
  req.responseType = 'arraybuffer';

  req.onload = function(e) {
    const data = new Uint8Array(req.response);
    const workbook = XLSX.read(data, {type: 'array'});

    /* DO SOMETHING WITH workbook HERE */
    const first_sheet_name = workbook.SheetNames[0];
    const address_of_cell = 'A1';

    /* Get worksheet */
    const worksheet = workbook.Sheets[first_sheet_name];

    /* Find desired cell */
    const desired_cell = worksheet[address_of_cell];

    /* Get the value */
    const desired_value = (desired_cell ? desired_cell.v : undefined);
    console.log(XLSX.utils.sheet_to_json(worksheet));

    let dataJSON = XLSX.utils.sheet_to_json(worksheet);

    console.log(dataJSON[0]);
  };
  req.send();
}
  ngOnInit() {
  }

}
