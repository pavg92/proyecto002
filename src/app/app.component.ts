import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Administracion de articulos';
  articulos = [
    { codigo: 1, descrip: 'Frutas', precio: 160}
  ];
  articulo = {
    codigo : 0,
    descrip : '',
    precio: 0
  };

  disCod = false;
  indexArt = -1;

  agregar() {
    if(this.validaciones(1)){
      this.articulos.push({
        codigo : this.articulo.codigo,
        descrip : this.articulo.descrip,
        precio: this.articulo.precio
      });
      this.reset();
      alert('Producto agregado');
    }
  }

  borrar(index: number) {
    this.articulos.splice(index, 1);
    alert('Producto eliminado');
  }

  seleccionar(art: {codigo: number, descrip: string, precio: number}, index: number) {
    this.articulo.codigo = art.codigo;
    this.articulo.descrip = art.descrip;
    this.articulo.precio = art.precio;
    this.disCod = true;
    this.indexArt = index;
  }

  modificar() {
    if(this.validaciones(2)) {
      this.articulos[this.indexArt].descrip = this.articulo.descrip;
      this.articulos[this.indexArt].precio = this.articulo.precio;
      this.reset();
      alert('Producto modoficado');
    }
  }

  reset() {
    this.articulo.codigo = 0;
    this.articulo.descrip = '';
    this.articulo.precio = 0;
    this.disCod =false;
    this.indexArt = -1;
  }

  validaciones(op: number) {
    if(!Object.values(this.articulo).every(data => data !== '')){
      alert('Favor de completar los campos');
      return false;
    }
    if(op == 1){//si la op es igual a 1 significa que es un nuevo producto
      if(this.articulo.codigo == 0){
        alert('Debe ingresar un código de articulo distinto a cero');
        return false;
      }
      if(this.articulos.find(art => art.codigo == this.articulo.codigo)){
        alert('Ya existe un articulo con dicho codigo');
        return false;
      }
    }

    return true;
  }


}
