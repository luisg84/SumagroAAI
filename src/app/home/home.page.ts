import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router) { }


  onSubmitTemplate() {
    console.log('Holu');
  }

  onSubmitLogin() {
      // console.log(this.email);
      // console.log(this.password);
      this.authService.login(this.email, this.password).then( res => {
      this.router.navigate(['/menu']);
    }).catch(err => alert('los datos son incorrectos o no existe el usuario'));
  }
}


