import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { catchError, delay, Observable, retry, tap, throwError } from 'rxjs'
import { ICodeValue } from '../models/codevalue'


@Injectable({
  providedIn: 'root'
})
export class CodeValueService {
  constructor(
    private http: HttpClient
  ) {
  }

  codeValue: ICodeValue[] = []

  getAll(): Observable<ICodeValue[]> {
    return this.http.get<ICodeValue[]>("http://localhost:5285/api/Data" ).pipe(
      delay(200),
      retry(2),
      tap(codeValues => this.codeValue = codeValues),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    console.error(error.message)
    return throwError(() => error.message)
  }
}
