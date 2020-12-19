import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

// Para utilizar funciones globales javascript dentro de Angular
declare function customInitFunctions(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
