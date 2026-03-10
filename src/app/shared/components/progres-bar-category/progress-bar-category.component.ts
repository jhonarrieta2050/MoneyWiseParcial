import { Component, Input } from '@angular/core';

@Component({
selector: 'app-progress-bar-category',
templateUrl: './progress-bar-category.component.html',
styleUrls: ['./progress-bar-category.component.scss'],
standalone: false,
})
export class ProgressBarCategoryComponent {
@Input() categoria: string = '';
@Input() monto: number = 0;
@Input() porcentaje: number = 0;
@Input() color: string = '#DDA0DD';
}
