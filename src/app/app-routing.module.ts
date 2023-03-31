import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieResolver } from './services/movie.resolver';
import {CastResolver} from "./services/cast.resolver";
import { PersonComponent } from './components/person/person.component';
import { MovieCreditResolver } from './services/movie-credit.resolver';
import { PersonResolver } from './services/person.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'movie/:id',
    resolve: { movie: MovieResolver, cast: CastResolver },
    component: MovieComponent,
  },
  {
    path: 'movie-credit/:id',
    resolve: { movies: MovieCreditResolver, person: PersonResolver },
    component: PersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
