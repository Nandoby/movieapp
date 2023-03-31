import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Trending } from '../models/trending';
import { Movie } from '../models/movie';
import { Casting } from '../models/casting';
import { MovieCredit } from '../models/movie-credit';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  currentPage: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  getTrends(): Observable<Trending> {
    return this.http.get<Trending>(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=4282e60768e390a1fe8653bd60fb1907&language=fr&page=' +
        this.currentPage.value
    );
  }

  getMovie(movieId: string): Observable<Movie> {
    return this.http.get<Movie>(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=4282e60768e390a1fe8653bd60fb1907&language=fr`
    );
  }

  getCasting(movieId: string): Observable<Casting> {
    return this.http.get<Casting>(
      `https://api.themoviedb.org/3/movie/${movieId}/casts?api_key=4282e60768e390a1fe8653bd60fb1907&language=fr`
    );
  }

  getMovieCredit(personId: string): Observable<MovieCredit> {
    return this.http.get<MovieCredit>(
      `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=4282e60768e390a1fe8653bd60fb1907&language=fr`
    );
  }

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(
      `https://api.themoviedb.org/3/person/${id}?api_key=4282e60768e390a1fe8653bd60fb1907&language=fr`
    )
  }

  constructor(private http: HttpClient) {}
}
