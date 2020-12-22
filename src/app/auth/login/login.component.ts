import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Para utilizar funciones globales javascript dentro de Angular
declare function customInitFunctions(): void;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    // Navigate to Dashboard
    this.router.navigateByUrl('/');
    // Para tener disponible el javascript que realiza el TOGGLE del menú lateral a través del botón hamburguer
    customInitFunctions();
  }
}
