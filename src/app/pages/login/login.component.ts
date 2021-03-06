import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  error = '';
  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
    console.log('Test Login');
  }


  logins(): void {
    if (this.username === ''){
      this.error = 'USERNAME OI';
    }else if (this.password === ''){
      this.error = 'PASSWORD OII';
    }
    this.service.login(this.username , this.password).subscribe(data => {
      const jwt = data.data.login;
      if (jwt !== 'Wrong'){
        this.router.navigateByUrl('/home');
      }
    });
  }


}
