import { Component } from '@angular/core';
import { Filme } from 'src/app/model/filme';
import { FilmeService } from 'src/app/service/filme.service';
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
  categorias: categorias[] = [
    {value: 'comedia', viewValue: 'comédia'},
    {value: 'acao', viewValue: 'ação'},
    {value: 'drama', viewValue: 'drama'},
  ];
  constructor (private filmeService: FilmeService){}
  adicionarFilme = new Filme();
  adicionado = false;
  adicionar(){
    this.filmeService.inserir(this.adicionarFilme).subscribe(filmes=>{
    return this.adicionado = true;
    });
  }

}
