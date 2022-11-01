import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular-d3';

  menuListItems = [
    {
        title: 'Line Chart',
        route: '/line-chart'
    },
    {
        title: 'Multi Series Line Chart',
        route: '/multi-series'
    },
    {
        title: 'Bar Chart',
        route: '/bar-chart'
    },
    {
        title: 'Stacked Bar Chart',
        route: '/stacked-bar-chart'
    },
    {
        title: 'Pie Chart',
        route: '/pie-chart'
    },
    {
        title: 'Donut chart',
        route: '/donut-chart'
    },
];
}
