import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-bug-lib',
  template: `
  <span><img class="logo" src="http://bug-bounty-system.s3-website.us-east-2.amazonaws.com/Ladybug-128.png"> </span>
    <h3>
      Add bug from site 
    </h3>
    <button mat-raised-button color="primary">Primary</button>
  `,
  styles: [
  ]
})
export class BugLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
