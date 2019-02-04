import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppCanLoad } from "./guards/app-can-load.guard";
import { AppCanActivate } from "./guards/app-can-activate.guard";
import { AppCanDeactivate } from "./guards/app-can-deactivate.guard";


const appRoutes: Routes = [
    {
        path: 'sample', loadChildren: './sample-feat/sample-feat.module#SampleFeatModule',
        canLoad: [AppCanLoad],
        canActivate: [AppCanActivate],
        canDeactivate: [AppCanDeactivate]
    },
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