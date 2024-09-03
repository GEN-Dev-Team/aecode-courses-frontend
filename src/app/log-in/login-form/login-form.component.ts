import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ILogin } from '../interface/Login';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginForm: FormGroup;
  usersList: ILogin[] = [];
  login!: ILogin;

  constructor(private fb: FormBuilder, private logInService: UserService) {
    this.loginForm = this.fb.group({
      userId: new FormControl(0),
      username: new FormControl(''),
      email: new FormControl(''),
      passwordHash: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getUsers();
  }

  getUsers() {
    this.logInService.getUsers().subscribe((response) => {
      this.usersList = response;
      console.log(this.usersList);
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.logInService.createUser(this.loginForm.value).subscribe((response) => {
      console.log(response);
    });
  }
}
