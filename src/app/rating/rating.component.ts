import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  mouth;
  stars;
  constructor() { }

  ngOnInit() {
    this.mouth = document.querySelector(".mouth");
    this.stars = document.querySelectorAll("label");
    for (let i=0; i<this.stars.length; i++) {
      this.stars[i].addEventListener("click", this.emotion.bind(this));
    }
  }

  emotion(e) {
    if (e.target.htmlFor === "star1") {
      this.mouth.style.borderRadius = "40%";
      this.mouth.style.borderBottom = "13px solid black";
      this.mouth.style.width = "25px";
      this.mouth.style.transform = "rotate(0deg)";
    } else if (e.target.htmlFor === "star2") {
      this.mouth.style.borderRadius = "40%";
      this.mouth.style.borderBottom = "3px solid black";
      this.mouth.style.width = "25px";
      this.mouth.style.transform = "rotate(0deg)";
    } else if (e.target.htmlFor === "star3") {
      this.mouth.style.borderRadius = "0%";
      this.mouth.style.borderBottom = "3px solid black";
      this.mouth.style.width = "25px";
      this.mouth.style.transform = "rotate(0deg)";
    } else if (e.target.htmlFor === "star4") {
      this.mouth.style.borderRadius = "0%";
      this.mouth.style.borderBottom = "3px solid black";
      this.mouth.style.width = "15px";
      this.mouth.style.transform = "rotate(0deg)";
    } else if (e.target.htmlFor === "star5") {
      this.mouth.style.borderRadius = "0%";
      this.mouth.style.borderBottom = "3px solid black";
      this.mouth.style.width = "10px";
      this.mouth.style.transform = "rotate(-10deg)";
    }
  }
}
