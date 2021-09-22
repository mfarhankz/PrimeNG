import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewSelectedComponent } from "./review-selected/review-selected.component";
import { ReviewHomeComponent } from "./review-home/review-home.component";

const routes: Routes = [
  { path: '', component: ReviewSelectedComponent },
  { path: 'review-review-selected', component: ReviewHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
