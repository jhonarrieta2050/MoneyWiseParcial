import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Transaccion } from '../models/transaccion.model';
import { AuthService } from './auth.service';

const TRANSACCIONES_KEY = 'moneywise_transacciones';

@Injectable({ providedIn: 'root' })
export class TransaccionService {
constructor(
    private storageService: StorageService,
    private authService: AuthService
) {}

private async getAllTransacciones(): Promise<Transaccion[]> {
    return (await this.storageService.get(TRANSACCIONES_KEY)) || [];
}

async getTransacciones(): Promise<Transaccion[]> {
const user = this.authService.getCurrentUser();
    if (!user) return [];
    const all = await this.getAllTransacciones();
    return all.filter(t => t.usuarioId === user.id);
}

async getTransaccionById(id: string): Promise<Transaccion | undefined> {
    const all = await this.getAllTransacciones();
    return all.find(t => t.id === id);
}

async createTransaccion(data: Omit<Transaccion, 'id' | 'usuarioId'>): Promise<Transaccion> {
    const user = this.authService.getCurrentUser();
    if (!user) throw new Error('No autenticado');
    const all = await this.getAllTransacciones();
    const newTransaccion: Transaccion = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    usuarioId: user.id,
    };
    all.push(newTransaccion);
    await this.storageService.set(TRANSACCIONES_KEY, all);
    return newTransaccion;
}

async updateTransaccion(id: string, data: Partial<Transaccion>): Promise<Transaccion> {
    const all = await this.getAllTransacciones();
    const idx = all.findIndex(t => t.id === id);
    if (idx === -1) throw new Error('Transacción no encontrada');
    all[idx] = { ...all[idx], ...data };
    await this.storageService.set(TRANSACCIONES_KEY, all);
    return all[idx];
}

async deleteTransaccion(id: string): Promise<void> {
    const all = await this.getAllTransacciones();
    const filtered = all.filter(t => t.id !== id);
    await this.storageService.set(TRANSACCIONES_KEY, filtered);
}
}
