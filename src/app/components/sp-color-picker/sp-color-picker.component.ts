import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sp-color-picker',
  templateUrl: './sp-color-picker.component.html',
  styleUrls: ['./sp-color-picker.component.css']
})
export class SpColorPickerComponent implements OnInit {


  @Input() selectedColor: string;
  @Input() inputPlaceholder: string;
  constructor() { }

  ngOnInit() {
  }

}
