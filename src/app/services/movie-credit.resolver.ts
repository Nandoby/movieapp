import { Injectable } from "@angular/core";
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { mergeMap, Observable, take, map } from "rxjs"
import { MovieCredit } from "../models/movie-credit";
import { Person } from "../models/person";
import { FilmsService } from "./films.service";

@Injectable({
  providedIn: 'root'
})
export class MovieCreditResolver implements Resolve<MovieCredit> {

  constructor(private service: FilmsService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieCredit> {

    return this.service.getMovieCredit(<string>route.paramMap.get('id'))

  }

}
