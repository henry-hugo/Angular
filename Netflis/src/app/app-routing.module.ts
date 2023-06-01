import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmeComponent } from './views/filme/filme.component';
import { AdicionarComponent } from './views/adicionar/adicionar.component';
import { Categoria } from './model/Categoria';
import { CategoriaComponent } from './views/categoria/categoria.component';

const routes: Routes = [
  {path:'listar',component: FilmeComponent},
  {path:'adicionarProduto',component: AdicionarComponent},
  {path:'adicionarCategoria',component: CategoriaComponent},
  {path:'filme',component:FilmeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
