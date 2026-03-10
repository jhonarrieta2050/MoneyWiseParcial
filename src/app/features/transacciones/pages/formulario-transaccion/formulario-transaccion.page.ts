import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { TransaccionService } from '../../../../core/services/transaccion.service';
import { CameraService } from '../../../../core/services/camera.service';
import { Transaccion } from '../../../../core/models/transaccion.model';

@Component({
selector: 'app-formulario-transaccion',
templateUrl: './formulario-transaccion.page.html',
styleUrls: ['./formulario-transaccion.page.scss'],
standalone: false,
})
export class FormularioTransaccionPage implements OnInit {
transaccion: Transaccion | undefined;
isEditMode = false;
capturedPhoto: string | null = null;

constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transaccionService: TransaccionService,
    private cameraService: CameraService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
) {}

async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
    this.isEditMode = true;
    this.transaccion = await this.transaccionService.getTransaccionById(id);
    if (this.transaccion?.comprobante) {
        this.capturedPhoto = this.transaccion.comprobante;
    }
    }
}

async onFormSubmitted(data: Partial<Transaccion>): Promise<void> {
    const loading = await this.loadingCtrl.create({ message: 'Guardando...' });
    await loading.present();
    try {
    if (this.capturedPhoto) {
        data.comprobante = this.capturedPhoto;
}
    if (this.isEditMode && this.transaccion) {
        await this.transaccionService.updateTransaccion(this.transaccion.id, data);
    } else {
        await this.transaccionService.createTransaccion(data as Omit<Transaccion, 'id' | 'usuarioId'>);
    }
    await loading.dismiss();
    const toast = await this.toastCtrl.create({
        message: this.isEditMode ? 'Transacción actualizada' : 'Transacción creada',
        duration: 2000,
        color: 'success',
    });
    await toast.present();
    this.router.navigate(['/transacciones']);
    } catch (error: unknown) {
    await loading.dismiss();
    const message = error instanceof Error ? error.message : 'Error desconocido';
    const toast = await this.toastCtrl.create({ message, duration: 3000, color: 'danger' });
    await toast.present();
    }
}

async onPhotoCaptured(): Promise<void> {
    const photo = await this.cameraService.takePhoto();
    if (photo) {
    this.capturedPhoto = photo;
    }
}

removePhoto(): void {
    this.capturedPhoto = null;
}

goBack(): void {
    this.router.navigate(['/transacciones']);
}
}
