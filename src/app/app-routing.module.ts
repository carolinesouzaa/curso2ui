import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //cursos
  {
    path: '', pathMatch: 'full', redirectTo: 'cursos'
  },
  {
    path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },

  //alunos
  {
    path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
