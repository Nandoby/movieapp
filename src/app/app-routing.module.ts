import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieResolver } from './services/movie.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'movie/:id',
    resolve: { movie: MovieResolver },
    component: MovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
