import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  interpolation: ['{{', '}}']
})
export class CardComponent implements OnInit {
  title = 'My Card Title'
  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, nemo.'
  number = 100500
  array = [1, 2, 3, 4, 5, 6, 7]
  obj = { name: 'Jone', info: { age: 30, job: 'Front-end' } }

  imgUrl: string = 'https://bipbap.ru/wp-content/uploads/2019/05/orig-21.jpg'

  disabled = false

  ngOnInit() {
    console.log('ngOnInit')
    setTimeout(() => {
      this.imgUrl = 'https://www.meme-arsenal.com/memes/255c6c22e76c9c7b447e5a2605bc8ed7.jpg'
      this.disabled = true
    }, 5000)
  }

  getInfo(): string {
    return 'This is my info'
  }
}
