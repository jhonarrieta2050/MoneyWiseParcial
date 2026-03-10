import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
selector: 'app-photo-gallery-modal',
templateUrl: './photo-gallery-modal.component.html',
styleUrls: ['./photo-gallery-modal.component.scss'],
standalone: false,
})
export class PhotoGalleryModalComponent {
@Input() photoUrl: string = '';

constructor(private modalController: ModalController) {}

dismiss(): void {
    this.modalController.dismiss();
}
}
