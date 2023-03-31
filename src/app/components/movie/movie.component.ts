import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmsService} from "../../services/films.service";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../../models/movie";
import {Subscription} from "rxjs";
import {Casting} from "../../models/casting";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['Préc.', 'Suiv'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  public isLoading: boolean = true
  public movie!: Movie;
  public cast!: Casting
  private subscription!: Subscription;
  private castingSubscription!: Subscription

  constructor(
    private service: FilmsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(
      ({ movie }) => {
        this.movie = movie
        this.isLoading = false
      }
    );

    this.castingSubscription = this.activatedRoute.data.subscribe(({cast}) => this.cast = cast)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
