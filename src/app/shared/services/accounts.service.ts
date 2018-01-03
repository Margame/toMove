import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Account} from '../models/account.model';

@Injectable()
export class AccountsService {
  constructor(private http: Http) {}

  getAccountByEmail(email: string): Observable<Account> {
    return this.http.get(`http://localhost:3000/accounts?email=${email}`)
      .map((response: Response) => response.json())
      .map((account: Account) => account[0] ? account[0] : undefined);
  }

  createNewAccount(account: Account): Observable<Account> {
    return this.http.post('http://localhost:3000/accounts', account)
      .map((response: Response) => response.json());
  }


}
