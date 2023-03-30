import { Injectable } from "@angular/core";
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import {Casting} from "../models/casting";
import {FilmsService} from "./films.service";

@Injectable({
  providedIn: 'root',
})
export class CastResolver implements Resolve<Casting> {
  constructor(private service: FilmsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Casting> | Promise<Casting> | Casting {
    return this.service.getCasting(<string>route.paramMap.get('id'))
  }
}
