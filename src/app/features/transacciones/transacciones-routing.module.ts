import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTransaccionesPage } from './pages/lista-transacciones/lista-transacciones.page';
import { DetalleTransaccionPage } from './pages/detalle-transaccion/detalle-transaccion.page';
import { FormularioTransaccionPage } from './pages/formulario-transaccion/formulario-transaccion.page';

const routes: Routes = [
{ path: '', component: ListaTransaccionesPage },
{ path: 'nueva', component: FormularioTransaccionPage },
{ path: ':id', component: DetalleTransaccionPage },
{ path: ':id/editar', component: FormularioTransaccionPage },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class TransaccionesRoutingModule {}
