import { Injectable } from "@angular/core";
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { mergeMap, Observable, take, map } from "rxjs"
import { MovieCredit } from "../models/movie-credit";
import { Person } from "../models/person";
import { FilmsService } from "./films.service";

@Injectable({
  providedIn: 'root'
})
export class PersonResolver implements Resolve<Person> {

  constructor(private service: FilmsService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person> {

    return this.service.getPerson(<string>route.paramMap.get('id'))
    // return new Observable((subscriber) => {
    //   subscriber.next(this.service.getMovieCredit(<string>route.paramMap.get('id'))),
    //   subscriber.next(this.service.getCasting(<string>route.paramMap.get('id')))
    // })
  }

}
