import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute } from '@angular/router';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-confirm-register',
  templateUrl: './confirm-register.component.html',
  styleUrls: ['./confirm-register.component.scss']
})
export class ConfirmRegisterComponent implements OnInit {
  email =  '';
  username =  '';
  country =  '';
  password = '';
  confirmPassword =  '';

  constructor(private router: Router , private actRoute: ActivatedRoute ,  private apollo: Apollo) { }

  ngOnInit(): void {
    // console.log(this.actRoute.snapshot.paramMap.get('email'));
    this.email =  this.actRoute.snapshot.paramMap.get('email');
    this.country = this.actRoute.snapshot.paramMap.get('country');
  }
  confirmRegister(): void{
    this.apollo.mutate<{register: string}>({
      mutation: gql`mutation register($email:String! , $username:String! , $password:String! , $country_region:Int! ){
  register(email: $email , username: $username , password: $password , country_region: $country_region)
}`, variables: {
        email: this.email,
        username: this.username,
        password: this.password,
        country_region: Number(this.country)
      }
    }).subscribe(data => {
      this.router.navigateByUrl('/home');
    });
  }
}
