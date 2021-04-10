import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError, Observable, of, from } from 'rxjs';
import { catchError, groupBy, map, mergeMap, reduce, switchMap, tap, toArray } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Hospitalization } from '../models/hospitalization';
import { Interaction } from '../models/interaction';
import { InteractionType } from '../enums/interaction-type';
import { InteractionsOnDate } from '../models/interactions-on-date';

@Injectable({
  providedIn: 'root'
})
export class HospitalizationsService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.api}/hospitalizations`
  }

  public Get(id: string): Observable<Hospitalization> {

    var mockData = {
      id: "1234",
      patient: {
          name: "Renxxxx xxxxx xxxxiva",
          bed: "926",
      },
      hospital: {
        name: "Sírio-Libanês",
        address: "Rua Dona Adma Jafet, 115",
        city: "São Paulo",
        state: "SP",
        phone: "(11) 3394-0200",
        email: "atendimento@sirio.com.br",
        visitingDays: "Todos os dias",
        visitingHours: "15:00 ás 16:00"
      },
      entryAt: new Date(),
      updateAt: new Date()
    };

    return of<Hospitalization>(mockData)

    return this.httpClient.get<Hospitalization>(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public GetInteractions(id: string): Observable<Interaction[]> {

    var reportInteraction2 = {
      id: "123",
      interactionAt: new Date(2020, 0, 10),
      type: InteractionType.Report,
      professionalName: "Dr. Fernandes",
      report: "sadasdasdasdasddad"
    };

    var reportInteraction3 = {
      id: "123",
      interactionAt: new Date(2020, 0, 11),
      type: InteractionType.Report,
      professionalName: "Dr. Fernandes",
      report: "sadasdasdasdasddad"
    };

    var reportInteraction = {
      id: "123",
      interactionAt: new Date(),
      type: InteractionType.Report,
      professionalName: "Dr. Fernandes",
      medication: "sadasdasdasdasddad"
    };

    return of<Interaction[]>([reportInteraction2, reportInteraction, reportInteraction3, reportInteraction, reportInteraction,  reportInteraction2, reportInteraction2]);

    return this.httpClient.get<Interaction[]>(`${this.baseUrl}/${id}/interactions`)
      .pipe(
        catchError(this.handleError)
      );
  }


  public GetInteractionsGroupedByDate(id: string): Observable<InteractionsOnDate[]> {
    return this.GetInteractions(id)
                .pipe(
                  switchMap(
                    interactions => from(interactions)
                  ),
                  groupBy(
                    interaction => interaction.interactionAt
                  ),
                  mergeMap(group$ =>
                    group$.pipe(
                      reduce(
                        (acc, cur) => [...acc, cur], [group$.key]
                      ),
                      map(array => new InteractionsOnDate(<Date>array[0], <Interaction[]>array.splice(1))),
                      toArray()
                    )
                  ),
                  tap(ev => console.log(ev))
                );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError({
      error: error.error.message,
      status: error.status
    });
  };
}
