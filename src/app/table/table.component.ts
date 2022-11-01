import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    d3.csv('.././assets/frameworks.csv').then(data => {
      var columns = data.columns;
      this.tabulate(data, columns);
    })
  }

  tabulate = function(data, columns) {
    var table = d3.select('body').append('table');
    var thead = table.append('thead');
    var tbody = table.append('tbody');
    thead.append('tr')
      .selectAll('th')
        .data(columns)
        .enter()
      .append('th')
        .text((d: any) => {return d});
    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
      .append('tr');
    
    var cells = rows.selectAll('td')
        .data((row:any) => {
          return columns.map((column:any) => {
            return { column: column, value: row[column] };
          });
        })
        .enter()
      .append('td')
        .text((d:any) => { return d.value });
    
    return table;
  }

}
