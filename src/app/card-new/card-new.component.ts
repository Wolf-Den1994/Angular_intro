import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.css']
})
export class CardNewComponent implements OnInit {
  title = 'My Card Title'
  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, nemo.'

  changeTitle() {
    this.title = 'New Title'
  }

  // inputHandle (event: any) {
  //   const { value } = event.target
  //   this.title = value
  // }

  inputHandle (value: any) {
    this.title = value
  }

  ngOnInit(): void {
    console.log('CardNewComponent');
  }

}
