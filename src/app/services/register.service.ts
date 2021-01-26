import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private apollo: Apollo) { }
  registers(usernames , passwords , otps): Observable<any> {
    return this.apollo.mutate<{register: string}>({
      mutation: gql`mutation registers($username:String! , $password:String! , $otp_code:String!){
  register(username: $username , password: $password , otp_code:$otp_code)
}`, variables: {
        username: usernames,
        password: passwords,
        otp_code: otps,
      }
    })
  }
}
