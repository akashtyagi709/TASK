import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondtaskComponent } from './secondtask/secondtask.component';

const routes: Routes = [
  {path:'task2',component:SecondtaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
