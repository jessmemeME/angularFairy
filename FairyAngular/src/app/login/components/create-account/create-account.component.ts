import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from '../../../accounts/services/accounts.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  accountForm!: FormGroup;

  constructor(private fb: FormBuilder, private servicio: AccountsService, private router: Router) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      is_active: [false],
      is_staff: [false]
    });
  }

  crearNuevaCuenta(): void {
    if (this.accountForm.valid) {
      this.servicio.postData(this.accountForm.value).subscribe(
        (result) => {
          this.router.navigateByUrl('login/validate-code', { state: this.accountForm.value });
        },
        (error) => {
          // Manejar errores
        }
      );
    }
  }
}
