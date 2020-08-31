import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-bug-lib',
  template: `
    <button> Click to add <button>
    <p>
      bug-lib works!
    </p>
  `,
  styles: [
  ]
})
export class BugLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
