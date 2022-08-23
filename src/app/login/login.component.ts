import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public login = {
    email: null,
    password: null,
  };
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {}
  onSubmit() {
    this._http.post('url', this.login);
  }
}
