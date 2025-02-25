import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from '../../services/accounts.service';
import { Accounts } from '../../../../models/accounts.model';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent implements OnInit {
  accounts: Accounts[] = [];

  constructor(private servicio: AccountsService, private router: Router) {}

  ngOnInit(): void { 
    this.obtenerLista();  
  }

  obtenerLista(): void {
    this.servicio.getDataWithHeader().subscribe({
      next: (data) => {
        this.accounts = data;
      }
    });
  }

  eliminarDatos(account: Accounts): void {
    this.servicio.deleteData(account).subscribe({
      next: () => {
        this.obtenerLista();
      },
      error: (err) => {
        console.error('Error al eliminar cuenta:', err);
      }
    });
  }

  // 🔥 Mover la navegación aquí en lugar de en el HTML
  irAEditar(account: Accounts): void {
    this.router.navigate(['/account/update-account'], { state: account });
  }

  irAPermisos(account: Accounts): void {
    this.router.navigate(['/account/permission-account'], { state: account });
  }
}