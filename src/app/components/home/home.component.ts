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

  beersList: any = [];

  constructor(public beerService: BeerService, private router: Router) { }

  ngOnInit() {
    this.getBeers();
  }

  getBeers() {
    return this.beerService.getBeers().subscribe(data => {
      this.beersList = data;
    });
  }

  seeInfo(beer: object) {
    console.log(beer);
    let data: object = JSON.parse(JSON.stringify(beer));
    // console.log(beer.id);
    console.log(typeof beer);
    console.log(typeof data);
    // this.router.navigateByUrl('/detail/', beer.id)
  }

}
