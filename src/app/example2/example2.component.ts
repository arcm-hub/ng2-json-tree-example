import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {
  config = {
    pageSize: 2
  };
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
