import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleRoutingModule } from './sample-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
//For more information about Material2:
//https://material.angular.io/components/categories

import { SampleViewComponent } from './sample-view/sample-view.component';
import { SampleFeatComponent } from './sample-feat/sample-feat.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    SampleRoutingModule
  ],
  declarations: [
    SampleViewComponent,
    SampleFeatComponent
  ]
})
export class SampleFeatModule { constructor() { console.info('SampleFeatModule loaded') } }
