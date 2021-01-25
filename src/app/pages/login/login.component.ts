import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private apollo: Apollo, private router: Router) { }

  ngOnInit(): void {
    console.log('Test Login');
  }


  logins(): void {
    this.apollo.mutate<{login: string}>({
      mutation: gql`mutation loginuser($username:String!, $password:String!){
  login(username:$username, password:$password)
}`, variables: {
        username: this.username,
        password: this.password
      }
    }).subscribe(data => {
      const jwt = data.data.login;
      if (jwt){
        localStorage.setItem('jwt', jwt);
        this.router.navigateByUrl('/home');
      }
    });


//     console.log(this.username);
//     console.log(this.password);
//     console.log('test');
  }


}
