import { Injectable } from "@angular/core";
import { CanLoad, Route } from "@angular/router";
import { Observable, ReplaySubject } from "rxjs";

@Injectable()
export class AppCanLoad implements CanLoad {

  constructor() {
    console.info('AppCanLoad loaded');
  }

  // Guards to handle the navigation to a module before it's loaded into the client.
  // More than one guards can be created but only one type at time can be activate to a route.
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.info('Activate AppCanLoad guards!')
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