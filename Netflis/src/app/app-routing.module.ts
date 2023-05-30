import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmeComponent } from './views/filme/filme.component';
import { AdicionarComponent } from './views/adicionar/adicionar.component';
import { CategoriaService } from './service/categoria.service';

const routes: Routes = [
  {path:'listar',component: FilmeComponent},
  {path:'adicionarProduto',component: AdicionarComponent},
  {path:'adicionarCategoria',component:CategoriaService}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
