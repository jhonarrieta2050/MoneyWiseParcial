import { Component, Input } from '@angular/core';
import { CATEGORIAS } from '../../../core/constants/categorias.constant';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrls: ['./category-icon.component.scss'],
  standalone: false,
})
export class CategoryIconComponent {
  @Input() categoria: string = '';

  get icono(): string {
    const cat = CATEGORIAS.find(c => c.nombre === this.categoria);
    return cat?.icono || 'ellipsis-horizontal';
  }

  get color(): string {
    const cat = CATEGORIAS.find(c => c.nombre === this.categoria);
    return cat?.color || '#DDA0DD';
  }
}
