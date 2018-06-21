import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


const appRoutes: Routes = [
    { path:'sample', loadChildren: './sample-feat/sample-feat.module#SampleFeatModule'},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }