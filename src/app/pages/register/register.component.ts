import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Apollo, gql} from 'apollo-angular';
import {Router} from '@angular/router';
import {ApolloService} from '../../services/apollo.service';
import {OtpService} from '../../services/otp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email =  '';
  confirmEmail =  '';
  country =  0;
  listCountry;

  siteKey: string;
  aFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder , private router: Router , private service2: OtpService , private service: ApolloService) {
    this.siteKey = '6Lf8LDkaAAAAAOccwrgXDEFiHAXUp_Cugfh7J9s6';
  }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
    this.service.getCountries().subscribe( data => {
      this.listCountry = data.data.countries;
    });
  }
  register1(): void {
    this.service2.otps(this.email , this.country).subscribe(data => {
      this.router.navigateByUrl('/confirm-register');
    });
  }

}
