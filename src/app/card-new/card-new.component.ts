import { Component, Input, OnInit } from '@angular/core';
import { ICard } from "../app.component";

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.css']
})
export class CardNewComponent implements OnInit {

  @Input() card!: ICard
  @Input() index!: number

  title = 'My Card Title'
  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, nemo.'

  changeTitle() {
    this.card.title = 'New Title'
  }

  // inputHandle (event: any) {
  //   const { value } = event.target
  //   this.title = value
  // }

  inputHandle (value: any) {
    this.card.title = value
  }

  ngOnInit(): void {
    console.log('CardNewComponent');
  }

}
