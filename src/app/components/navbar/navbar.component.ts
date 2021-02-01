import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username: any;

  constructor(private service: LoginService) { }

  ngOnInit(): void {
    // const menuToggle = document.querySelector('.menu-toggle input');
    // const nav = document.querySelector('nav ul');
    //
    // menuToggle.addEventListener('click', function(){
    //   nav.classList.toggle('slide');
    // });

    this.service.getUserByID().subscribe(data => {
      this.username = data.data.user;
      console.log(this.username);
      if (this.username === null) {
        this.username = 'Guest';
      }
    });
  }
}
