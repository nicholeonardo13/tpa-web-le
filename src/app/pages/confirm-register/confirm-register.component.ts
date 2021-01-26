import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute } from '@angular/router';
import {Apollo, gql} from 'apollo-angular';
import {RegisterService} from '../../services/register.service';

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
  otp = '';

  constructor(private router: Router , private actRoute: ActivatedRoute ,  private service: RegisterService) { }

  ngOnInit(): void {
  }
  confirmRegister(): void{
    this.service.registers(this.username , this.password , this.otp).subscribe(data => {
      const check = data.data.register;
      if (check !== 'OTP Salah' && check !== 'OTP Tidak Valid'){
        this.router.navigateByUrl('/home');
      }
    });
  }
}
