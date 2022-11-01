import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MatMenuModule} from '@angular/material/menu'
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatSelectModule } from '@angular/material/select'

import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MultiSeriesComponent } from './multi-series/multi-series.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TableComponent } from './table/table.component';

export const appRoutes: Routes = [
  { path: 'line-chart', component: LineChartComponent, runGuardsAndResolvers: 'always' },
  { path: 'multi-series', component: MultiSeriesComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'stacked-bar-chart', component: StackedBarChartComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'donut-chart', component: DonutChartComponent },
  { path: '',
      redirectTo: '/bar-chart',
      pathMatch: 'full'
  },
  { path: '**', component: LineChartComponent }
];

@NgModule({
  declarations: [
        AppComponent,
        BarChartComponent,
        MultiSeriesComponent,
        StackedBarChartComponent,
        PieChartComponent,
        DonutChartComponent,
        LineChartComponent,
        TableComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'ignore'}),
        MatMenuModule,
        MatSidenavModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
