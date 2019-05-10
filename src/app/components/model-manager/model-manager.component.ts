import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-model-manager',
  templateUrl: './model-manager.component.html',
  styleUrls: ['./model-manager.component.css']
})
export class ModelManagerComponent implements OnInit {

  @Input() modelName: string;

  constructor() { }

  ngOnInit() {
  }

}
