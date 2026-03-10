import { Pipe, PipeTransform } from '@angular/core';
import { CATEGORIAS } from '../../core/constants/categorias.constant';

@Pipe({ name: 'categoryColor', standalone: false })
export class CategoryColorPipe implements PipeTransform {
  transform(categoria: string): string {
    const cat = CATEGORIAS.find(c => c.nombre === categoria);
    return cat?.color || '#DDA0DD';
  }
}
