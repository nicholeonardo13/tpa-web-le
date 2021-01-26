import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Query} from '../models/query';
import {Apollo, gql} from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apollo: Apollo) { }
  login(usernames , passwords): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`mutation loginuser($username:String!, $password:String!){
  login(username:$username, password:$password)
}`, variables: {
        username: usernames,
        password: passwords
      }
    })
  }
}
