import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/models/productos/producto';
import { ProductoDataService } from 'src/app/services/productos/producto-data.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {

  localProductoList: IProducto[] = []

  constructor(private productoService: ProductoDataService){}

  ngOnInit(): void {
    this.localProductoList = this.productoService.list();
  }
  
}
