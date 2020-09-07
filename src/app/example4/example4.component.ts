import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css']
})
export class Example4Component implements OnInit {
  config = {
    pageSize: 2
  };
  json = {
    "breakfast_menu": {
        "food": [
            {
                "calories": {
                    "_text": "650"
                },
                "description": {
                    "_text": "Two of our famous Belgian Waffles with plenty of real maple syrup"
                },
                "name": {
                    "_text": "Belgian Waffles"
                },
                "price": {
                    "_text": "$5.95"
                }
            },
            {
                "calories": {
                    "_text": "900"
                },
                "description": {
                    "_text": "Light Belgian waffles covered with strawberries and whipped cream"
                },
                "name": {
                    "_text": "Strawberry Belgian Waffles"
                },
                "price": {
                    "_text": "$7.95"
                }
            },
            {
                "calories": {
                    "_text": "900"
                },
                "description": {
                    "_text": "Light Belgian waffles covered with an assortment of fresh berries and whipped cream"
                },
                "name": {
                    "_text": "Berry-Berry Belgian Waffles"
                },
                "price": {
                    "_text": "$8.95"
                }
            },
            {
                "calories": {
                    "_text": "600"
                },
                "description": {
                    "_text": "Thick slices made from our homemade sourdough bread"
                },
                "name": {
                    "_text": "French Toast"
                },
                "price": {
                    "_text": "$4.50"
                }
            },
            {
                "calories": {
                    "_text": "950"
                },
                "description": {
                    "_text": "Two eggs, bacon or sausage, toast, and our ever-popular hash browns"
                },
                "name": {
                    "_text": "Homestyle Breakfast"
                },
                "price": {
                    "_text": "$6.95"
                }
            }
        ]
    }
}

  constructor() { }

  ngOnInit() {
  }

  onEvent(event: any) {
    var backgroundColor = 'white'
    if(event.type === 'TREE_NODE_CREATED' && event.data.modelKey === 'food') {
      event.data.toolbar.append('span')
      .attr('class', 'ng2-json-tree-toolbar-button')
      .text('highlight')
      .on('click', function(d, i) {
        backgroundColor = backgroundColor === 'white' ? 'lightyellow' : 'white';
        event.data.d3ParentContainer.style('background-color', backgroundColor);
        console.log("CLICKED", event);
      });
    }
  }

}
