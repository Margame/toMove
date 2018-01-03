import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {AccountsService} from '../../shared/services/accounts.service';
import {Account} from '../../shared/models/account.model';
import {AuthService} from '../../shared/services/auth.service';


@Component({
  selector: 'tmv-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private accountsService: AccountsService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    const formData = this.form.value;
    this.accountsService.getAccountByEmail(formData.email)
      .subscribe((account: Account) => {
        if (account) {alert('Email was sent to ' + account.email);
        } else {alert('wrong email');
        }
      });
  }
}
