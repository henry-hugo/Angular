import { Component } from '@angular/core';
import { Filme } from 'src/app/model/filme';
import { FilmeService } from 'src/app/service/filme.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent {
  constructor (private filmeService: FilmeService){}
  lista = true;
  listaFilmes: Filme[] = [];
  adicionarFilme = new Filme();



  listar(){
    this.filmeService.listar().subscribe(filmes=>{
      this.listaFilmes = filmes ;
      this.lista = false;
    });
  }


  adicionar(){
    this.filmeService.inserir(this.adicionarFilme).subscribe(filmes=>{
      this.listar();
    });
  }


  excluir(id: number){
    this.filmeService.excluir(id).subscribe(filmes=>{
      this.listar();
    });
  }


  editar(){
      this.filmeService.atualizar(this.adicionarFilme).subscribe(filmes=>{
      this.listar();
    });
  }


}
