import { Component, Output, EventEmitter } from '@angular/core';
import { CATEGORIAS, TIPOS_TRANSACCION } from '../../../core/constants/categorias.constant';

@Component({
selector: 'app-filter-bar',
templateUrl: './filter-bar.component.html',
styleUrls: ['./filter-bar.component.scss'],
standalone: false,
})
export class FilterBarComponent {
@Output() tipoChanged = new EventEmitter<string>();
@Output() categoriaChanged = new EventEmitter<string>();
@Output() searchChanged = new EventEmitter<string>();

categorias = CATEGORIAS;
tipos = TIPOS_TRANSACCION;
selectedTipo = '';
selectedCategoria = '';
searchText = '';

onTipoChange(event: any): void {
    this.selectedTipo = event.detail.value;
    this.tipoChanged.emit(this.selectedTipo);
}

onCategoriaChange(event: any): void {
    this.selectedCategoria = event.detail.value;
    this.categoriaChanged.emit(this.selectedCategoria);
}

onSearchChange(event: any): void {
    this.searchText = event.detail.value;
    this.searchChanged.emit(this.searchText);
}
}
