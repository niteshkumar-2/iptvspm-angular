import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';
  showPassword: boolean = true;
  passwordType: String = "password"

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  login() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email,this.password);

    this.email = '';
    this.password = '';

  }
  onClickShowPassword() {
    if(this.passwordType === "password"){
      this.passwordType = "text"
    }else{
      this.passwordType = "password"
    }
    this.showPassword = !this.showPassword;
  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }
}
