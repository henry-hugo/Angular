import { Component } from '@angular/core';
import { Filme } from 'src/app/model/Filme';
import { FilmeService } from 'src/app/service/filme.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Categoria } from 'src/app/model/Categoria';
import { GeneroService } from 'src/app/service/genero.service';
import { Genero } from 'src/app/model/Genero';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent {
  constructor (private filmeService: FilmeService, private  categoriaService: CategoriaService, private generoService: GeneroService){}

  listaCategoria: Categoria[] = [];
  listaGenero: Genero[] = [];
  lista = true;

  listaFilmes: Filme[] = [];
  adicionarFilme = new Filme();
  input = false;

  nome = '';

  ngOnInit() {
    this.listar();
    this.listarC();
    this.listarG();
  }

  listar(){
    this.filmeService.listar().subscribe(filmes=>{
      this.listaFilmes = filmes ;
      this.lista = false;
    });
  }


  excluir(id: number){
    this.filmeService.excluir(id).subscribe(filmes=>{
      this.listar();
    });
  }

  inputEditar(filme:Filme){
    this.adicionarFilme = filme;
    this.input = true;
  }


  editar(){
      this.filmeService.atualizar(this.adicionarFilme).subscribe(filmes=>{
        this.input = false;
      this.listar();
    });
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

  listarCategoria(categoria: String){
    this.filmeService.listarCategoria(categoria).subscribe(filmes=>{
      this.listaFilmes = filmes ;
      this.lista = false;
    });
  }

  filtro(){
    this.filmeService.filtro(this.nome).subscribe(filmes=>{
      this.listaFilmes = filmes ;
      this.lista = false;
    });
  }


}
