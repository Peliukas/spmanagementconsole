import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { LocalStorageManagerService } from 'src/app/services/local-storage-manager.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private authService: AuthenticationService, 
    private snackBar: MatSnackBar,
    private storageManager: LocalStorageManagerService,
    private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.authService.verifyToken()
      .subscribe( res => {
        if(res){
          this.router.navigate(['/admin/dashboard']);
        }
      });
    }
  }

  login(){
    this.authService.login(this.loginFormGroup.getRawValue().email, this.loginFormGroup.getRawValue().password)
    .subscribe(user => {
      if(user){
        this.storageManager.store('token', user['token'].toString());
        this.storageManager.store('username', user['username'].toString());
        this.storageManager.store('userid', user['id'].toString());
        this.router.navigate(['/admin/dashboard']);
      }else{
        this.snackBar.open("Credentials do not match. Try again.", "OK", {
          duration: 2000
        });
      }
    });
  }

}
