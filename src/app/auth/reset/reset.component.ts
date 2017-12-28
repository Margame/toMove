import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {AccountsService} from '../../shared/services/accounts.service';
import {Account} from '../../shared/models/account.model';
import {AuthService} from '../../shared/services/auth.service';


@Component({
  selector: 'tmv-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

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
        if ((account)) {
          window.localStorage.setItem('account', JSON.stringify(account));
          this.authService.login();
          // this.router.navigate(['']);
        }
      });
  }
}
