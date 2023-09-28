import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddProductoComponent } from './components/productos/add-producto/add-producto.component';
import { UpdateProductoComponent } from './components/productos/update-producto/update-producto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteProductoComponent } from './components/productos/delete-producto/delete-producto.component';
import { ListProductoComponent } from './components/productos/list-producto/list-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductoComponent,
    UpdateProductoComponent,
    DeleteProductoComponent,
    ListProductoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
