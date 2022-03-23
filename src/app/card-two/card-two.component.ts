import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.css']
})
export class CardTwoComponent implements OnInit {

  title = 'My Card Title TWO'
  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, nemo.'
  textColor: string = ''

  changeTitle() {
    this.title = 'New Title'
  }

  inputHandle (value: any) {
    this.title = value
  }

  ngOnInit(): void {
    console.log('CardNewComponent');
  }

  changeHandle () {
    console.log(this.title)
  }
}
