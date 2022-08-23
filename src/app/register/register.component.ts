import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public register = {
    first_name:null,
    last_name:null,
    email:null,
    phone:null,
    password:null,
    confirm_password:null
  }
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this._http.post('url', this.register);
  }
}
