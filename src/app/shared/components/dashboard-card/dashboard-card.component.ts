import { Component, Input } from '@angular/core';

@Component({
selector: 'app-dashboard-card',
templateUrl: './dashboard-card.component.html',
styleUrls: ['./dashboard-card.component.scss'],
standalone: false,
})
export class DashboardCardComponent {
@Input() titulo: string = '';
@Input() valor: number = 0;
@Input() color: string = 'primary';
@Input() icono: string = 'cash';
}
