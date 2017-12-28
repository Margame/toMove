import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {AccountsService} from '../../shared/services/accounts.service';
import {Account} from '../../shared/models/account.model';
import {AuthService} from '../../shared/services/auth.service';


@Component({
  selector: 'tmv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private accountsService: AccountsService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
   this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  onSubmit() {
    const formData = this.form.value;
    this.accountsService.getAccountByEmail(formData.email)
      .subscribe((account: Account) => {
        if ((account) && (account.password === formData.password)) {
          window.localStorage.setItem('account', JSON.stringify(account));
            this.authService.login();
           // this.router.navigate(['']);
          } else {
            alert('Wrong login or password');
        }
        });
    }

}
