import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({ providedIn: 'root' })
export class StorageService {
constructor(private storage: Storage) {}

async init(): Promise<void> {
    await this.storage.create();
}

async get(key: string): Promise<any> {
    return await this.storage.get(key);
}

async set(key: string, value: any): Promise<any> {
    return await this.storage.set(key, value);
}

async remove(key: string): Promise<void> {
    await this.storage.remove(key);
}

async clear(): Promise<void> {
    await this.storage.clear();
}
}
