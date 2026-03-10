import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'monthName', standalone: false })
export class MonthNamePipe implements PipeTransform {
private months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
transform(monthIndex: number): string {
    if (monthIndex < 0 || monthIndex >= 12) return '';
    return this.months[monthIndex];
}
}
