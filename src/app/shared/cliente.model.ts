import { ContentChildren } from "@angular/core";

export interface Cliente{
    DNI: string;
    pass:string;
    Nombre?:string;
    Direccion?:string;
    Telefono?:string;
    Facturas?: Factura[];
    reservas?: Reserva[];
}

export interface Factura{
    Id: number;
    Fecha: Date;
    EsPagada: Boolean;
    EsAnulada: Boolean;
    Lineas: Linea [];
    DameTotal: number;
}

export interface Linea {
    NumLinea: number;
    Precio: number;
}

export interface Reserva{
    Id: number;
    Inicio: Date;
    Final: Date;
    Coches?: Coche[];
    

}

export interface Coche{

    NumLicencia:number;
    Categoria?:number;
    Estado?:number;

}