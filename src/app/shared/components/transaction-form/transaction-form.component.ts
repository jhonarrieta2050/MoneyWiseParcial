import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaccion } from '../../../core/models/transaccion.model';
import { CATEGORIAS, TIPOS_TRANSACCION } from '../../../core/constants/categorias.constant';

@Component({
selector: 'app-transaction-form',
templateUrl: './transaction-form.component.html',
styleUrls: ['./transaction-form.component.scss'],
standalone: false,
})
export class TransactionFormComponent implements OnInit {
@Input() transaccion: Transaccion | null = null;
@Output() formSubmitted = new EventEmitter<Partial<Transaccion>>();
@Output() photoCaptured = new EventEmitter<void>();

form!: FormGroup;
categorias = CATEGORIAS;
tiposTransaccion = TIPOS_TRANSACCION;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
    this.form = this.fb.group({
    tipo: [this.transaccion?.tipo || 'gasto', Validators.required],
    categoria: [this.transaccion?.categoria || '', Validators.required],
    monto: [this.transaccion?.monto || '', [Validators.required, Validators.min(1)]],
    descripcion: [this.transaccion?.descripcion || ''],
    fecha: [this.transaccion?.fecha || new Date().toISOString(), Validators.required],
    });
}

onSubmit(): void {
    if (this.form.valid) {
    this.formSubmitted.emit(this.form.value);
    }
}

onTakePhoto(): void {
    this.photoCaptured.emit();
}
}
