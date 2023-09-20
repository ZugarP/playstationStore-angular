import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{

  @Input()
  gameCover:String=""
  @Input()
  gameLabel:String=""
  @Input()
  gameType:String=""
  @Input()
  gamePrice:String=""

  constructor(){ }

  ngOnInit(): void {

  }

}
