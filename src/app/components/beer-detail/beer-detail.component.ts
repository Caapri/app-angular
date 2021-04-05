import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  data: any = {};

  constructor(private route: ActivatedRoute, public beerService: BeerService) { }

  ngOnInit(): void {
    this.getBeer();
  }

  getBeer(): void {
    const id = this.route.snapshot.params.id;

    // tslint:disable-next-line: deprecation
    this.beerService.getBeer(id).subscribe((value) => {
      this.data = value[0];
    });
  }

}
