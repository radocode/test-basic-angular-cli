import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  users: () => `https://reqres.in/api/users`,
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(routes.users()).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load users'))
    );
  }
}
