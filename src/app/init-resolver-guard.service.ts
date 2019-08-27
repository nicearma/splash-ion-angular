import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {InitNotifierService} from './init-notifier.service';

@Injectable({
  providedIn: 'root'
})
export class InitGuard implements CanActivate {

  constructor(private initNotifierService: InitNotifierService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // charge à lots of code, like translate, logos, etc.
    return of(true)
      .pipe(
        delay(10000),
        tap(() => this.initNotifierService.haveBeenInitialized())
        );
  }

}
