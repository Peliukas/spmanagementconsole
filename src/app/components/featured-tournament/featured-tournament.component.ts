import { Component, OnInit, Input } from '@angular/core';
import { ApiConfig } from 'src/app/api-config';

@Component({
  selector: 'app-featured-tournament',
  templateUrl: './featured-tournament.component.html',
  styleUrls: ['./featured-tournament.component.css']
})
export class FeaturedTournamentComponent implements OnInit {

  @Input() featuredTournament: any;

  constructor(private config: ApiConfig) { }

  ngOnInit() {
  }

}
