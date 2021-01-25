import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Apollo} from 'apollo-angular';
import {Router} from '@angular/router';
import {query} from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email =  '';
  confirmEmail =  '';
  country =  0;

  siteKey: string;
  aFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder , private router: Router) {
    this.siteKey = '6Lf8LDkaAAAAAOccwrgXDEFiHAXUp_Cugfh7J9s6';
  }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  register1(): void {
    console.log(this.email);
    console.log(this.confirmEmail);
    console.log(this.country);
    this.router.navigate(['/confirm-register', this.email, this.country , {relativeTo: this.router}]);
    // this.router.navigateByUrl('/confirm-register/${this.email}/${this.country}');
  }

}
