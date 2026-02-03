import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Breadcrumb } from '../component/shared/breadcrumb/breadcrumb';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, Breadcrumb, FormsModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  
})
export class Layout {

  quickQuery = '';
  constructor(private router: Router) {}

  goSearch(): void{
    const q = (this.quickQuery || '').trim();
    this.router.navigate(['/busqueda'], {queryParams: {q} }); 
  }

}
