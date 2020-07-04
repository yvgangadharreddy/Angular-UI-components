import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  routes: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.routes = this.router.config.filter((route) => route.data);
  }

}
