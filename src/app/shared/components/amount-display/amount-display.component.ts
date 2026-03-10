import { Component, Input } from '@angular/core';
import { TipoTransaccion } from '../../../core/models/transaccion.model';

@Component({
  selector: 'app-amount-display',
  templateUrl: './amount-display.component.html',
  styleUrls: ['./amount-display.component.scss'],
  standalone: false,
})
export class AmountDisplayComponent {
  @Input() monto: number = 0;
  @Input() tipo: TipoTransaccion = 'gasto';
}
