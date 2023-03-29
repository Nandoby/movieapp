import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { FilmsService } from './films.service';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieResolver implements Resolve<Movie> {
  constructor(private service: FilmsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Movie> {
    return this.service.getMovie(<string>route.paramMap.get('id'));
  }
}
