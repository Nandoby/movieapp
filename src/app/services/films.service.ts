import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { Trending } from '../models/trending';
import {Movie} from "../models/movie";
import {Casting} from "../models/casting";

@Injectable({
  providedIn: 'root',
})
export class FilmsService {

  currentPage: BehaviorSubject<number> = new BehaviorSubject<number>(1)

  getTrends(): Observable<Trending> {
    return this.http.get<Trending>(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=4282e60768e390a1fe8653bd60fb1907&language=fr&page=' + this.currentPage.value
    );
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${id}?api_key=4282e60768e390a1fe8653bd60fb1907&language=fr`)

  }

  getCasting(id: string): Observable<Casting> {
    return this.http.get<Casting>(`https://api.themoviedb.org/3/movie/${id}/casts?api_key=4282e60768e390a1fe8653bd60fb1907&language=fr`)
  }

  constructor(private http: HttpClient) {}
}
