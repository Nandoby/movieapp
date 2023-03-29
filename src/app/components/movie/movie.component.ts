import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmsService} from "../../services/films.service";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../../models/movie";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  public movie!: Movie;
  private subscription!: Subscription;

  constructor(
    private service: FilmsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(
      ({ movie }) => (this.movie = movie)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
