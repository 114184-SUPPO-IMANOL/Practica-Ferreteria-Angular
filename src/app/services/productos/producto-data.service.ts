import { Injectable } from '@angular/core';
import { IProducto } from 'src/app/models/productos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoDataService {

  constructor() { }
  productoList:IProducto[]=[
    {nombre:'taladro dewalt',precio:194000,foto:'https://http2.mlstatic.com/D_NQ_NP_633420-MLA45467093493_042021-O.webp'},
    {nombre:'clavos 2 1/2" punta paris',precio:1812,foto:'https://http2.mlstatic.com/D_NQ_NP_867724-MLA32346227969_092019-O.webp'},
    {nombre:'destornillador philips bahco',precio:3800,foto:'https://http2.mlstatic.com/D_NQ_NP_786936-MLA47063208963_082021-O.webp'}
  ]

  add(producto: IProducto){
    this.productoList.push(producto)
  }

  list(): IProducto[]{
    return this.productoList;
  } 

  getByIndex(_producto: IProducto): number{
    return this.productoList.findIndex(producto => producto.nombre == _producto.nombre)
  }

  update(producto: IProducto){
    let indice: number = this.getByIndex(producto);
    if(indice >= 0){
      this.productoList[indice].nombre = producto.nombre;
      this.productoList[indice].precio = producto.precio;
      this.productoList[indice].foto = producto.foto;
    }
  }

  delete(producto: IProducto){
    let indice: number = this.getByIndex(producto);
    if(indice >= 0){
      this.productoList.splice(indice, 1);
    }
  }

}
