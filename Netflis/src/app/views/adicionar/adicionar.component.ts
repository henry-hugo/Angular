import { Component } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { Filme } from 'src/app/model/Filme';
import { FilmeService } from 'src/app/service/filme.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { GeneroService } from 'src/app/service/genero.service';
import { Genero } from 'src/app/model/Genero';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css'],
})

export class AdicionarComponent {
  constructor (private filmeService: FilmeService, private  categoriaService: CategoriaService, private generoService: GeneroService){}

  listaCategoria: Categoria[] = [];
  listaGenero: Genero[] = [];

  adicionarFilme = new Filme();
  adicionado = false;

  adicionar(){
    this.filmeService.inserir(this.adicionarFilme).subscribe(filmes=>{
    return this.adicionado = true;
    });
  }

  ngOnInit() {
    this.listarC();
    this.listarG();
  }

  listarC(){
    this.categoriaService.listar().subscribe(categoria=>{
      this.listaCategoria = categoria ;
    });
  }

  listarG(){
    this.generoService.listar().subscribe(genero=>{
      this.listaGenero = genero ;
    });
  }

}
