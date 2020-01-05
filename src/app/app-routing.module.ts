import { CreateComponent } from './create/create.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'articles/:id',
    component:ArticleComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  
  {
    path: 'edit/:id',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
