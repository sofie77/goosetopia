import { Igoose } from "./goose";
import { Injectable } from "@angular/core"
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators"

@Injectable({
    providedIn: 'root'
})

export class GooseService{
  private gooseUrl = 'api/geese/geese.json'

  constructor(private http:HttpClient){}


    getGeese(): Observable <Igoose[]>{
        return this.http.get<Igoose[]>(this.gooseUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );  
    }
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = ` an error occured: ${err.error.message}`;
        } else{
            errorMessage = `server returned code: ${err.status}, error message ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
    
}