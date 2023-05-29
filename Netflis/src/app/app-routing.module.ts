import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmeComponent } from './views/filme/filme.component';
import { AdicionarComponent } from './views/adicionar/adicionar.component';

const routes: Routes = [
  {path:'listar',component: FilmeComponent},
  {path:'adicionar',component: AdicionarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
