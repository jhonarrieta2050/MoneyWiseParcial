import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DetalleTransaccionPage } from './pages/detalle-transaccion/detalle-transaccion.page';
import { FormularioTransaccionPage } from './pages/formulario-transaccion/formulario-transaccion.page';
import { ListaTransaccionesPage } from './pages/lista-transacciones/lista-transacciones.page';
import { TransaccionesRoutingModule } from './transacciones-routing.module';

@NgModule({
declarations: [FormularioTransaccionPage, DetalleTransaccionPage, ListaTransaccionesPage],
imports: [SharedModule, TransaccionesRoutingModule],
schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TransaccionesModule {}
