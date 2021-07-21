import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Cliente, Factura } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';
import {Router} from '@angular/router';
//import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  factura:Factura;

  constructor(private activateRoute:ActivatedRoute,private clienteService:ClienteService,private router:Router) {
    this.activateRoute.queryParams.subscribe(params => {
      clienteService.getLoggedCliente().then(c => {
        c.Facturas.forEach(f => {
          if (f.Id == (params['id'] as number)) {
            this.factura = f;
            console.log(f);
          }
        });
      });
    });
    

  } 

  ngOnInit() {

  }

  goBack(){
    window.history.back();
  }

  mostrarDetalleLinea(numLinea):void{
    this.router.navigate(['/linea-detalle'],{
      queryParams: {
        numLinea:numLinea
      }
    });

  }
  

  // ngOnInit() {
  //   this.clienteService.getLoggedCliente().then(c => {
  //     this.cliente=c;
  //   });
  // }

}


