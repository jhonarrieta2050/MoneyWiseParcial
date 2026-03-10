import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../models/user.model';

const USERS_KEY = 'moneywise_users';
const CURRENT_USER_KEY = 'moneywise_current_user';

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser: User | null = null;

  constructor(private storageService: StorageService) {}

  async init(): Promise<void> {
    this.currentUser = await this.storageService.get(CURRENT_USER_KEY);
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  async login(email: string, password: string): Promise<User> {
    const users: User[] = (await this.storageService.get(USERS_KEY)) || [];
    const hashed = await hashPassword(password);
    const user = users.find(u => u.email === email && u.password === hashed);
    if (!user) {
      throw new Error('Credenciales incorrectas');
    }
    this.currentUser = user;
    await this.storageService.set(CURRENT_USER_KEY, user);
    return user;
  }

  async register(nombre: string, email: string, password: string): Promise<User> {
    const users: User[] = (await this.storageService.get(USERS_KEY)) || [];
    if (users.find(u => u.email === email)) {
      throw new Error('El correo ya está registrado');
    }
    const newUser: User = {
      id: Date.now().toString(),
      email,
      nombre,
      password: await hashPassword(password),
      fechaRegistro: new Date(),
    };
    users.push(newUser);
    await this.storageService.set(USERS_KEY, users);
    return newUser;
  }

  async logout(): Promise<void> {
    this.currentUser = null;
    await this.storageService.remove(CURRENT_USER_KEY);
  }
}
