export type TipoTransaccion = 'gasto' | 'ingreso';
export type Categoria = 'Alimentación' | 'Transporte' | 'Vivienda' | 'Salud' | 'Ocio' | 'Salario' | 'Otros';

export interface Transaccion {
id: string;
tipo: TipoTransaccion;
categoria: Categoria;
monto: number;
descripcion?: string;
fecha: string;
comprobante?: string;
usuarioId: string;
}
