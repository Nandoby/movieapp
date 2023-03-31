import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieCredit } from 'src/app/models/movie-credit';
import { Person } from 'src/app/models/person';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  public movies!: MovieCredit;
  public person!: Person;
  public totalShow: number = 4;
  private movieCreditSubscription!: Subscription;

  constructor(
    private service: FilmsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movieCreditSubscription = this.activatedRoute.data.subscribe(
      ({ movies, person }) => {
        this.movies = movies;
        this.person = person;
      }
    );
  }

  showFilms(length: number) {
    const newArray = [...this.movies.cast];
    newArray.length = length;
    return newArray;
  }

  showMore() {
    const length = this.movies.cast.length;
    let items;

    if (length > this.totalShow) {
      length - this.totalShow > 4
        ? (items = 4)
        : (items = length - this.totalShow);

      this.showFilms((this.totalShow += items));
    }
  }
}
