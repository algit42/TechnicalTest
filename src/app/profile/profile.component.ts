import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'btc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  playerName = '';
  isFirstTime = false;
  editMode = false;
  btnSaveLabel = 'Save';
  myForm: FormGroup;

    // Form field'Name'
  private formFieldName = 'Name';

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
  }

  // Submit form
  onSubmitForm(form: NgForm) {
    this.playerName = form[this.formFieldName];
    this.userService.setUserName( form[this.formFieldName]);
    this.editMode = false;
    if (this.isFirstTime === true)
    {
      this.router.navigate(['/newGame']);
    }
  }

  // Initialization
  ngOnInit() {
    this.playerName = this.userService.getUserName();

    /* tslint:disable:no-string-literal */
    this.myForm = this.fb.group({
      Name: [this.playerName, Validators.required]
    });
    /* tslint:enable:no-string-literal */
    if (!this.playerName)
    {
      this.isFirstTime = true;
      this.editMode = true;
      this.btnSaveLabel = 'Continue';
    }
  }

}
