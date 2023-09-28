import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProducto } from 'src/app/models/productos/producto';
import { ProductoDataService } from 'src/app/services/productos/producto-data.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit  {

  //localProductoList: IProducto[] = []

  localProducto: IProducto = {
    nombre: '',
    precio: 0,
    foto: ''
  }

  constructor(private productServices: ProductoDataService){}

  public onAdd(event: NgForm){
    let nuevoProducto: IProducto = {
      nombre: event.value.nombre,
      precio: event.value.precio,
      foto: event.value.foto
    }

    if(!nuevoProducto.nombre){
      console.log("Debe colocar un nombre");
      return
    }
    if(nuevoProducto.precio <= 0){
      console.log("Debe colocar un precio admitido");
      return
    }
    if(this.productServices.getByIndex(nuevoProducto) >= 0){
      console.log("Ya existe el producto");
      return
    }
    else{
      this.productServices.add(nuevoProducto);
      alert("Se agrego el producto");
      event.resetForm();
    }
  }

  ngOnInit(): void{
    //this.localProductoList = this.productServices.list();
  }
}
