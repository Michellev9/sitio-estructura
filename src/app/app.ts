import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';
import { Breadcrumb } from "./component/shared/breadcrumb/breadcrumb";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout, Breadcrumb],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sitio-estructura');
}
