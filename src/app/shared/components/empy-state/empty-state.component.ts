import { Component, Input } from '@angular/core';

@Component({
selector: 'app-empty-state',
templateUrl: './empty-state.component.html',
styleUrls: ['./empty-state.component.scss'],
standalone: false,
})
export class EmptyStateComponent {
@Input() mensaje: string = 'No hay datos disponibles';
@Input() icono: string = 'folder-open-outline';
@Input() subtitulo: string = '';
}
