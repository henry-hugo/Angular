import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from '../model/Genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http: HttpClient) { }

  listar(): Observable <Genero[]>{
    return this.http.get<Genero[]>('http://localhost:3000/genero');
  }
  inserir(genero: Genero){
    return this.http.post<Genero>('http://localhost:3000/genero', genero);
  }
  atualizar(genero: Genero){
    return this.http.put<Genero>(`http://localhost:3000/genero/${genero.id}`,genero);
   }

   excluir(id: number): Observable<any>{
    return this.http.delete<Genero>(`http://localhost:3000/genero/${id}`);
   }
}
