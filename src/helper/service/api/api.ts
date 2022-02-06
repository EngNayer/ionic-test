import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    // API path
    baseUrl      = 'https://hrajelshabaka.aait-sa.com/api/v1/';
    public myGlobalVar: any = [];
    constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    handleError (error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('حدث خطا ما :', error.error.message);
        } else {
            console.error(
                `حدث خطا ما ف الداتا ${error.status}, ` +
                ` خطا ف الداتا : ${error.error}`);
        }
        return throwError(
            'حدث خطا ما .. آعد المحالة مرة آخري');
    }

    about(): Observable<any> {
        return this.http
            .post<any>(`${this.baseUrl}about`, '')
            .pipe(retry(2), catchError(this.handleError));
    }
    login(data): Observable<any> {
        return this.http
            .post<any>(`${this.baseUrl}us/applogin`, data)
            .pipe(retry(2), catchError(this.handleError));
    }
}
