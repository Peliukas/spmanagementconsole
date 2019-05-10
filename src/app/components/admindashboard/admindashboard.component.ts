import {Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  @Input() selectedModel: string = 'fightclub';
 
  constructor() { }

  ngOnInit() {
  }

}
