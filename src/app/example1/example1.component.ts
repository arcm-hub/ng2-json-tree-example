import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {
  json = {
    "note": {
        "body": {
            "_text": "Don't forget me this weekend!"
        },
        "from": {
            "_text": "Jani"
        },
        "heading": {
            "_text": "Reminder"
        },
        "to": {
            "_text": "Tove"
        }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
