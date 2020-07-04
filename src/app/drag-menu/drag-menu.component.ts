import { Component, OnInit } from '@angular/core';
import {element} from 'protractor';

@Component({
  selector: 'app-drag-menu',
  templateUrl: './drag-menu.component.html',
  styleUrls: ['./drag-menu.component.css']
})
export class DragMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelectorAll('.drag-area').forEach(element => {
      console.log(element);
      element.addEventListener('click', () => {
        (element.parentNode as HTMLElement).classList.toggle('closed');
      })
    });
  }

}
