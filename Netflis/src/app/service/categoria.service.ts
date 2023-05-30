import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }
  listar(): Observable <Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:3000/categoria');
  }
  inserir(categoria: Categoria ){
    return this.http.post<Categoria>('http://localhost:3000/categoria', categoria);
  }
  atualizar(categoria: Categoria){
    return this.http.put<Categoria>(`http://localhost:3000/categoria/${categoria.id}`,categoria);
   }

   excluir(id: number): Observable<any>{
    return this.http.delete<Categoria>(`http://localhost:3000/categoria/${id}`);
   }
 }
