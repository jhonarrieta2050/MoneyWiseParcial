import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { TransaccionService } from '../../../../core/services/transaccion.service';
import { Transaccion } from '../../../../core/models/transaccion.model';
import { PhotoGalleryModalComponent } from '../../../../shared/components/photo-gallery-modal/photo-gallery-modal.component';

@Component({
selector: 'app-detalle-transaccion',
templateUrl: './detalle-transaccion.page.html',
styleUrls: ['./detalle-transaccion.page.scss'],
standalone: false,
})
export class DetalleTransaccionPage implements OnInit {
transaccion: Transaccion | undefined;

constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transaccionService: TransaccionService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
) {}

async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
    this.transaccion = await this.transaccionService.getTransaccionById(id);
    }
}

onEdit(): void {
    if (this.transaccion) {
    this.router.navigate(['/transacciones', this.transaccion.id, 'editar']);
    }
}

async onDelete(): Promise<void> {
    const alert = await this.alertCtrl.create({
    header: 'Confirmar',
    message: '¿Deseas eliminar esta transacción?',
    buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
        text: 'Eliminar',
        role: 'destructive',
        handler: async () => {
            if (this.transaccion) {
            await this.transaccionService.deleteTransaccion(this.transaccion.id);
            const toast = await this.toastCtrl.create({ message: 'Transacción eliminada', duration: 2000, color: 'success' });
            await toast.present();
            this.router.navigate(['/transacciones']);
            }
        },
        },
      ],
    });
    await alert.present();
}

async onViewPhotos(): Promise<void> {
    if (!this.transaccion?.comprobante) return;
    const modal = await this.modalCtrl.create({
    component: PhotoGalleryModalComponent,
    componentProps: { photoUrl: this.transaccion.comprobante },
    });
    await modal.present();
}

goBack(): void {
    this.router.navigate(['/transacciones']);
}
}
