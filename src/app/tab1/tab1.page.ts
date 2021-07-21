import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Cliente, Reserva } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public token: string;
  public cliente: Cliente;
  public reservas: Reserva[];
  constructor(private clienteService: ClienteService,private storage:Storage, private router:Router) {}
  


  ngOnInit() {
    this.storage.get('token').then(token=>{this.token = token;})
    this.clienteService.getLoggedCliente().then(c=> {
      this.cliente=c;
      this.clienteService.getReservasPorDNI(c.DNI,this.token).subscribe(response=>{this.reservas=response;})
    })
  }

  mostrarDetalleFactura(id):void{
    this.router.navigate(['/factura'],{
      queryParams: {
        id:id
      }
    });
  }

  mostrarDetalleReserva(id):void{
    this.router.navigate(['/reserva'],{
      queryParams: {
        id:id
      }
    });
  }
}
