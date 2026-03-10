import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { TransaccionService } from './services/transaccion.service';
import { CameraService } from './services/camera.service';
import { AnalyticsService } from './services/analytics.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
imports: [
    CommonModule,
    IonicStorageModule.forRoot()
],
providers: [
    AuthService,
    StorageService,
    TransaccionService,
    CameraService,
    AnalyticsService,
    AuthGuard
]
})
export class CoreModule {
constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
    throw new Error('CoreModule ya esta cargado');
    }
}
}