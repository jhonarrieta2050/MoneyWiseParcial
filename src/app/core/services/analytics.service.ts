import { Injectable } from '@angular/core';
import { TransaccionService } from './transaccion.service';
import { ResumenFinanciero } from '../models/resumen-financiero.model';
import { CATEGORIAS } from '../constants/categorias.constant';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
    
constructor(private transaccionService: TransaccionService) {}

async getResumenFinanciero(): Promise<ResumenFinanciero> {
    const transacciones = await this.transaccionService.getTransacciones();
    const now = new Date();
    const mesActual = now.getMonth();
    const anioActual = now.getFullYear();

    const delMes = transacciones.filter(t => {
    const fecha = new Date(t.fecha);
    return fecha.getMonth() === mesActual && fecha.getFullYear() === anioActual;
    });

    const totalGastosMes = delMes
    .filter(t => t.tipo === 'gasto')
    .reduce((sum, t) => sum + t.monto, 0);

    const totalIngresosMes = delMes
    .filter(t => t.tipo === 'ingreso')
    .reduce((sum, t) => sum + t.monto, 0);

    const saldoActual = transacciones
    .reduce((sum, t) => t.tipo === 'ingreso' ? sum + t.monto : sum - t.monto, 0);

    const gastosPorCategoriaMap: { [key: string]: number } = {};
    delMes.filter(t => t.tipo === 'gasto').forEach(t => {
    gastosPorCategoriaMap[t.categoria] = (gastosPorCategoriaMap[t.categoria] || 0) + t.monto;
    });

    const gastosPorCategoria = Object.keys(gastosPorCategoriaMap).map(categoria => {
    const monto = gastosPorCategoriaMap[categoria];
      const porcentaje = totalGastosMes > 0 ? (monto / totalGastosMes) * 100 : 0;
    const cat = CATEGORIAS.find(c => c.nombre === categoria);
    return { categoria, monto, porcentaje, color: cat?.color || '#DDA0DD' };
    });

    return { saldoActual, totalGastosMes, totalIngresosMes, gastosPorCategoria };
}
}
