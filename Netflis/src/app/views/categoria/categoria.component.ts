import { Component } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  constructor(private categoriaService: CategoriaService) {}

  adicionarCategoria = new Categoria;
  adicionado = false;
  newCategoria = false;
  listaCategoria: Categoria[] = [];

  adicionar(){
    this.categoriaService.inserir(this.adicionarCategoria).subscribe(categorias=>{
    return this.newCategoria = false;
    });
  }
  ngOnInit() {
    this.listar();
  }

  listar(){
    this.categoriaService.listar().subscribe(categoria=>{
      this.listaCategoria = categoria ;
    });
  }

  categoriaNew(){
    if(this.newCategoria == false){
      this.newCategoria = true;
    }else{
      this.newCategoria = false;
    }

  }

}
