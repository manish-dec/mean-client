import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from './components/create/create.component';
import {EditComponent} from './components/edit/edit.component';
import {IndexComponent} from './components/index/index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'index',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
