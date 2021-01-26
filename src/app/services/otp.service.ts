import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor(private apollo: Apollo) { }

  otps(emails , country): Observable<any> {
    return this.apollo.mutate<{createOtp: string}>({
      mutation: gql`mutation otp($email:String! , $country_region:Int!){
  createOtp(email:$email , country_region:$country_region)
}`, variables: {
        email: emails,
        country_region: Number(country)
      }
    });
  }
}
