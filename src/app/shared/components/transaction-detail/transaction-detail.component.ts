import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaccion } from '../../../core/models/transaccion.model';

@Component({
selector: 'app-transaction-detail',
templateUrl: './transaction-detail.component.html',
styleUrls: ['./transaction-detail.component.scss'],
standalone: false,
})
export class TransactionDetailComponent {
@Input() transaccion!: Transaccion;
@Output() editClicked = new EventEmitter<void>();
@Output() deleteClicked = new EventEmitter<void>();
@Output() viewPhotos = new EventEmitter<void>();

onEdit(): void { this.editClicked.emit(); }
onDelete(): void { this.deleteClicked.emit(); }
onViewPhotos(): void { this.viewPhotos.emit(); }
}
