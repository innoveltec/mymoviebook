import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mb-register',
  styleUrls: ['./register.container.scss'],
  templateUrl: './register.container.html',
})
export class RegisterContainer {
  error: string;

  constructor(private authService: AuthService, private router: Router) {}

  async registerUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this.authService.createUser(email, password);
      this.router.navigate(['/']);
    } catch (err) {
      this.error = err.message;
    }
  }
}
