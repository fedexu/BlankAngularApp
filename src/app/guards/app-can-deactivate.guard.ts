import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, ReplaySubject } from "rxjs";
import { SampleViewComponent } from "../sample-feat/sample-view/sample-view.component";

@Injectable()
export class AppCanDeactivate implements CanDeactivate<SampleViewComponent> {

  constructor() {
    console.info('AppCanLoad loaded');
  }

  // Guards to handle the navigation OUT the component declared on the class.
  // More than one guards can be created but only one type at time can be activate to a route.
  canDeactivate(component: SampleViewComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.info('Activate AppCanDeactivate guards!')
    let result: ReplaySubject<boolean> = new ReplaySubject(1);
    //Logic for choose if navigable or not
    if (true)
      result.next(true);
    else
      result.next(false);
    result.complete();

    return result;
  }

}