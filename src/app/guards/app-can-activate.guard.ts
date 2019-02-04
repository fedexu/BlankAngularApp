import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, ReplaySubject } from "rxjs";

@Injectable()
export class AppCanActivate implements CanActivate {

    constructor() {
        console.info('AppCanActivate loaded');
    }

    // Guards to handle the navigation to a route.
    // More than one guards can be created but only one type at time can be activate to a route.
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.info('Activate AppCanActivate guards!')
        let result: ReplaySubject<boolean> = new ReplaySubject(1);
        //Logic for choose if navigable or not
        if (true)
            result.next(true);
        else {
            result.next(false);
        }
        result.complete();

        return result;
    }

}