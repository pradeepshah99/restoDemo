import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MyrestroService } from './myrestro.service';
import { tap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private service : MyrestroService, private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.headers.get('noauth'))
    return next.handle(request.clone());
else {
    const clonedreq = request.clone({
        headers: request.headers.set("token", "Bearer " + this.service.getToken())
    });
    return next.handle(clonedreq).pipe(
        tap(
            event => { },
            err => {
                if (err.error.auth == false) {
                    this.router.navigateByUrl('/login');
                }
            })
    );
}
  }
}
