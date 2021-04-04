import { Component, OnInit } from '@angular/core';
// import { ClrDatagridSortOrder } from '@clr/angular';
import { BeerService } from '../../services/beer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  beersList: Array<object> = [];

  constructor(public beerService: BeerService, private router: Router) { }

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(): object {
    // tslint:disable-next-line: deprecation
    return this.beerService.getAllBeers().subscribe(data => {
      this.beersList = data;
    });
  }

  seeInfo(beer: any): void {
    this.router.navigate(['/detail', beer.id]);
  }

}
