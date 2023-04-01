import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
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
  private shouldScroll = false

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

      this.totalShow += items

      setTimeout(() => {
        const lastFilm = document.getElementById('lastFilm')
        lastFilm?.scrollIntoView({ behavior: 'smooth' })

        // Faire défiler vers l'élément d'ancrage après un court délai
        setTimeout(() => {
          const scrollAnchor = document.getElementById('scrollAnchor')
          scrollAnchor?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      }, 100)
    }
  }
}
