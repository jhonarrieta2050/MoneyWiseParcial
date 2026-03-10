import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransaccionService } from '../../../../core/services/transaccion.service';
import { Transaccion } from '../../../../core/models/transaccion.model';

@Component({
  selector: 'app-lista-transacciones',
  templateUrl: './lista-transacciones.page.html',
  styleUrls: ['./lista-transacciones.page.scss'],
  standalone: false,
})
export class ListaTransaccionesPage implements OnInit {
  transacciones: Transaccion[] = [];
  filteredTransacciones: Transaccion[] = [];
  selectedTipo = '';
  selectedCategoria = '';
  searchText = '';

  constructor(
    private transaccionService: TransaccionService,
    private router: Router,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadTransacciones();
  }

  async ionViewWillEnter(): Promise<void> {
    await this.loadTransacciones();
  }

  async loadTransacciones(): Promise<void> {
    this.transacciones = await this.transaccionService.getTransacciones();
    this.applyFilters();
  }

  applyFilters(): void {
    const lower = this.searchText.toLowerCase();
    this.filteredTransacciones = this.transacciones.filter(t => {
      if (this.selectedTipo && t.tipo !== this.selectedTipo) return false;
      if (this.selectedCategoria && t.categoria !== this.selectedCategoria) return false;
      if (lower && !t.descripcion?.toLowerCase().includes(lower) && !t.categoria.toLowerCase().includes(lower)) return false;
      return true;
    });
  }

  onTipoChanged(tipo: string): void {
    this.selectedTipo = tipo;
    this.applyFilters();
  }

  onCategoriaChanged(categoria: string): void {
    this.selectedCategoria = categoria;
    this.applyFilters();
  }

  onSearchChanged(text: string): void {
    this.searchText = text;
    this.applyFilters();
  }

  goToDetalle(transaccion: Transaccion): void {
    this.router.navigate(['/transacciones', transaccion.id]);
  }

  goToNueva(): void {
    this.router.navigate(['/transacciones/nueva']);
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
