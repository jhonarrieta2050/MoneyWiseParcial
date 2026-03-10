import { Component, EventEmitter, Output } from '@angular/core';
import { CameraService } from '../../../core/services/camera.service';

@Component({
    selector: 'app-photo-selector',
    templateUrl: './photo-selector.html',
    styleUrls: ['./photo-selector.scss'],
    standalone: false,
})
export class PhotoSelectorComponent {
    @Output() photoSelected = new EventEmitter<string>();

    constructor(private cameraService: CameraService) { }

    async takePhoto(): Promise<void> {
        const photo = await this.cameraService.takePhoto();
        if (photo) this.photoSelected.emit(photo);
    }

    async selectFromGallery(): Promise<void> {
        const photo = await this.cameraService.selectFromGallery();
        if (photo) this.photoSelected.emit(photo);
    }
}
