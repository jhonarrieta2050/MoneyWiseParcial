import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaccion } from '../../../core/models/transaccion.model';

@Component({
    selector: 'app-transaction-item',
    templateUrl: './transaction-item.html',
    styleUrls: ['./transaction-item.scss'],
    standalone: false,
})
export class TransactionItemComponent {
    @Input() transaccion!: Transaccion;
    @Output() itemClicked = new EventEmitter<Transaccion>();

    onClick(): void {
        this.itemClicked.emit(this.transaccion);
    }
}
