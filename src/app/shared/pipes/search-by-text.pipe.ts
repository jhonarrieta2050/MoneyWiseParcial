import { Pipe, PipeTransform } from '@angular/core';
import { Transaccion } from '../../core/models/transaccion.model';

@Pipe({ name: 'searchByText', standalone: false })
export class SearchByTextPipe implements PipeTransform {
  transform(transacciones: Transaccion[], searchText: string): Transaccion[] {
    if (!transacciones || !searchText) return transacciones;
    const lower = searchText.toLowerCase();
    return transacciones.filter(t =>
      t.descripcion?.toLowerCase().includes(lower) ||
      t.categoria.toLowerCase().includes(lower)
    );
  }
}
