import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError, tap } from 'rxjs';
import { catchError } from "rxjs/operators";
import { EventTypes } from '../models/event-types';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
  EventTypes = EventTypes;

  constructor(
    private toastService: ToastService,
    private spinnerService:SpinnerService
  ) {
  }
  showToast(type: EventTypes, title: string, message: string) {
    console.log("azerty")
    switch (type) {
      case EventTypes.Success:
        this.toastService.showSuccessToast(title, message);
        break;
      case EventTypes.Warning:
        this.toastService.showWarningToast(title, message);
        break;
      case EventTypes.Error:
        this.toastService.showDangerToast(title, message);
        break;
      default:
        this.toastService.showInfoToast(title, message);
        break;
    }
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.requestStarted()
    return next.handle(request)
      .pipe(
        tap(
          (event)=>{
            if(event instanceof HttpResponse){
              this.spinnerService.requestEnded()
            }
          }
          
        ),
        catchError(
          (error: HttpErrorResponse) => {
            let errorMsg = '';
            if (error.error instanceof ErrorEvent) {
              errorMsg = `Error: ${error.error.message}`;
              this.showToast(EventTypes.Error, "Erreur", errorMsg)
            } else {
              this.spinnerService.resetSpinner()
              errorMsg = `Error Code: ${error.status},  Message: ${error.error.message}`;
              this.showToast(EventTypes.Error, "Erreur", errorMsg)
            }
            return throwError(() => new Error(errorMsg));
          }
        )
      )
  }
}
