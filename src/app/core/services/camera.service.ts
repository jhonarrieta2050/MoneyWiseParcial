import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({ providedIn: 'root' })
export class CameraService {
async takePhoto(): Promise<string | null> {
    try {
    const photo = await Camera.getPhoto({
        quality: 80,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
    });
    return photo.dataUrl || null;
    } catch (error) {
console.warn('Camera not available:', error);
return null;
    }
}

async selectFromGallery(): Promise<string | null> {
    try {
    const photo = await Camera.getPhoto({
        quality: 80,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
    });
    return photo.dataUrl || null;
    } catch (error) {
    console.warn('Gallery not available:', error);
    return null;
    }
}
}
