import { Component } from '@angular/core';
import { Genero } from 'src/app/model/Genero';
import { GeneroService } from 'src/app/service/genero.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent {
  constructor (private generoService : GeneroService){}
  adicionarGenero = new Genero();
  adicionado = false;
  newGenero = false;
  listarGenero: Genero[] = [];
  input = false;

  inputEditar(genero:Genero){
    this.adicionarGenero = genero;
    this.input = true;
  }

  editar(){
    this.generoService.atualizar(this.adicionarGenero).subscribe(genero=>{
    this.input = false;
    this. adicionarGenero = new Genero();
    this.listar();
  });
}

  adicionar(){
    this.generoService.inserir(this.adicionarGenero).subscribe(genero=>{
      this.listar();
      this.adicionarGenero = new Genero();
    return this.newGenero = false;
    });
  }
  ngOnInit() {
    this.listar();
  }

  listar(){
    this.generoService.listar().subscribe(genero=>{
      this.listarGenero = genero ;
    });
  }

  generoNew(){
    if(this.newGenero == false){
      this.newGenero = true;
    }else{
      this.newGenero = false;
    }

  }

  excluir(id: number){
    this.generoService.excluir(id).subscribe(genero=>{
      this.listar();
    });
  }
  fechar(){
    this.input = false;
    this.newGenero =false;
  }
}
