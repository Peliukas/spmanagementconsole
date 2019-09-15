import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiManagerService } from 'src/app/services/api-manager.service';

@Component({
  selector: 'app-fighter-card',
  templateUrl: './fighter-card.component.html',
  styleUrls: ['./fighter-card.component.css']
})
export class FighterCardComponent implements OnInit {

  fighterImageSrc: string;
  fighterHighlighted: boolean;  
  @Input() selected: boolean;
  @Input() selectable: boolean;
  @Input() fighter: any;
  @Output() fighterSelected: EventEmitter<any> = new EventEmitter();

  constructor(private apiManager: ApiManagerService) { }

  ngOnInit() {
  }

  fighterSelectionClicked(){
     this.fighterHighlighted = !this.fighterHighlighted;
     this.fighterSelected.emit(this.fighter.id);
  }

}
