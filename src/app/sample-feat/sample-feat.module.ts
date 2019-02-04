import { NgModule } from '@angular/core';
import { SampleRoutingModule } from './sample-routing.module';
import { SampleViewComponent } from './sample-view/sample-view.component';
import { SampleFeatComponent } from './sample-feat/sample-feat.component';
import { AppCommonModule } from '../app-common/common.module';

@NgModule({
  imports: [
    AppCommonModule,
    SampleRoutingModule
  ],
  declarations: [
    SampleViewComponent,
    SampleFeatComponent
  ]
})
export class SampleFeatModule { constructor() { console.info('SampleFeatModule loaded') } }
