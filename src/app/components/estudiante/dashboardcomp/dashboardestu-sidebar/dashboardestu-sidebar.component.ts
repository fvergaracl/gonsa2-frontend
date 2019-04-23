import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../services/login.service';
import { EBusquedasComponent} from '../../e-busquedas/e-busquedas.component';

@Component({
  selector: 'app-dashboardestu-sidebar',
  templateUrl: './dashboardestu-sidebar.component.html',
  styleUrls: ['./dashboardestu-sidebar.component.css']
})
export class DashboardestuSidebarComponent implements OnInit {
text: any;
  minutos: number;
  segundos: number;
    objetivosidebar: string = localStorage.getItem('objetivosidebar');
    descripcionsidebar: string = localStorage.getItem('descripcionsidebar');
    curso: string = localStorage.getItem('nombreclasecarousel');
    nick: string = this._LoginService.getNick();

  constructor(public _LoginService: LoginService, public _Busqueda: EBusquedasComponent) {
    this.minutos = 45;
    this.segundos = 59;
    setInterval(() => this.tick(), 1000);
   }

  public tick(): void {
    if (--this.segundos < 0) {
      this.segundos = 59;
      if (--this.minutos < 0) {
        this.text = (<HTMLInputElement>document.getElementById('resp2')).value;
        this._Busqueda.TerminarDesafio(this.text);
      }
    }
   }
  ngOnInit() {

  }
}
