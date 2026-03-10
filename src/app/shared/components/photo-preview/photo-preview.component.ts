import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
selector: 'app-photo-preview',
templateUrl: './photo-preview.component.html',
styleUrls: ['./photo-preview.component.scss'],
standalone: false,
})
export class PhotoPreviewComponent {
@Input() photoUrl: string = '';
@Output() removePhoto = new EventEmitter<void>();

onRemove(): void { this.removePhoto.emit(); }
}
