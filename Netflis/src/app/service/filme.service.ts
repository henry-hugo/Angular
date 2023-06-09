import { Injectable } from '@angular/core';
import {Filme} from '../model/Filme';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }
  listar(): Observable <Filme[]>{
    return this.http.get<Filme[]>('http://localhost:3000/filme');
  }
  listarCategoria(categoria: String): Observable <Filme[]>{
    return this.http.get<Filme[]>(`http://localhost:3000/filme?categoria=${categoria}`);
  }
  filtro(nome: String): Observable <Filme[]>{
    return this.http.get<Filme[]>(`http://localhost:3000/filme?title_filme_like=${nome}`);
  }
  inserir(filme: Filme){
    return this.http.post<Filme>('http://localhost:3000/filme', filme);
  }
  atualizar(filme: Filme){
    return this.http.put<Filme>(`http://localhost:3000/filme/${filme.id}`,filme);
   }

   excluir(id: number): Observable<any>{
    return this.http.delete<Filme>(`http://localhost:3000/filme/${id}`);
   }
 }


 //Observable para fazer uma chamada em pararelo
