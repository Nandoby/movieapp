import {Component, OnDestroy, OnInit} from '@angular/core';
import { Trending } from '../../models/trending';
import { FilmsService } from '../../services/films.service';
import {Observer, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public trendList!: Trending;
  public imagePrefix: string = 'https://image.tmdb.org/t/p/original/';
  public error?: string;
  public subscription!: Subscription;

  prevIsDisabled: boolean = false

  constructor(private filmService: FilmsService) {}

  ngOnInit() {

    this.subscription = this.filmService.getTrends().subscribe({
      next: (data) => (this.trendList = data),
      error: (data) => (this.error = 'Une erreur est survenue'),
    });
    this.checkPage()

  }

  checkPage(): boolean {
    return this.prevIsDisabled = this.filmService.currentPage.value === 1
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  loadFilms() {
    this.filmService.getTrends().subscribe({
      next: (data) => (this.trendList = data),
      error: (data) => (this.error = 'Une erreur est survenue'),
    });
  }

  next() {
    // this.filmService.currentPage.next(this.filmService.currentPage.value + 1)
    this.filmService.currentPage.next(this.filmService.currentPage.value + 1)
    this.loadFilms()
    this.checkPage()

  }

  previous(): void {
    this.filmService.currentPage.next(this.filmService.currentPage.value - 1)
    this.loadFilms()
    this.checkPage()
  }

}
