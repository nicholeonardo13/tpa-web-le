import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { Query } from '../models/query';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApolloService {

  constructor(private apollo: Apollo) { }

   getCountries(): Observable<Query>{
     return this.apollo.query<Query>({
       query: gql `query country{
  countries{
    country_name
  }
}`
     });
   }
  }


