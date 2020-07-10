import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'mb-login',
  styleUrls: ['./login.container.scss'],
  templateUrl: './login.container.html',
})
export class LoginContainer {
  error: string;

  constructor(private authService: AuthService, private router: Router) {}

  async loginUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this.authService.loginUser(email, password);
      this.router.navigate(['/movies']);
    } catch (err) {
      this.error = err.message;
    }
  }
}
