import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.scss']
})
export class ShareButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let button = document.querySelector(".body-container");
    button.addEventListener("click", () => {
      button.classList.toggle("exp");
    })
  }

}
