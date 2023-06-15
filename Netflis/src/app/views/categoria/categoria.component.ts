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
  input = false;

  inputEditar(categoria:Categoria){
    this.adicionarCategoria = categoria;
    this.input = true;
  }

  editar(){
    this.categoriaService.atualizar(this.adicionarCategoria).subscribe(categoria=>{
      this.input = false;
    this.listar();
  });
}

  adicionar(){
    this.categoriaService.inserir(this.adicionarCategoria).subscribe(categorias=>{
      this.listar();
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

  excluir(id: number){
    this.categoriaService.excluir(id).subscribe(categoria=>{
      this.listar();
    });
  }

}
