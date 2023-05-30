import { Component } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { Filme } from 'src/app/model/filme';
import { FilmeService } from 'src/app/service/filme.service';
import { CategoriaService } from 'src/app/service/categoria.service';
interface categorias {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css'],
})

export class AdicionarComponent {
  listaCategoria: Categoria[] = [];
  categoria = new Categoria();
  constructor (private filmeService: FilmeService, private  categoriaService: CategoriaService){}
  adicionarFilme = new Filme();
  adicionado = false;
  adicionar(){
    this.filmeService.inserir(this.adicionarFilme).subscribe(filmes=>{
    return this.adicionado = true;
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

}
