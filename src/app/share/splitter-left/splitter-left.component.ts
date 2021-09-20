import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splitter-left',
  templateUrl: './splitter-left.component.html',
  styleUrls: ['./splitter-left.component.scss']
})
export class SplitterLeftComponent implements OnInit {

  products:any = [
    {
      "id": "1000",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR"
    }, {
      "id": "1001",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR"
    }, {
      "id": "1002",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR"
    }, {
      "id": "1003",
      "date": "12/09/2020",
      "name": "Abdulrehman",
      "description": "This is a test comment let’s get started",
      "state": "New",
      "title": "Example 321",
      "s_name": "dummy dummy text copy",
      "type": "FR"
    }];
  selectedState: any = null;
  states: any[] = [
    { name: "Arizona", code: "Arizona" },
    { name: "California", value: "California" },
    { name: "Florida", code: "Florida" },
    { name: "Ohio", code: "Ohio" },
    { name: "Washington", code: "Washington" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
