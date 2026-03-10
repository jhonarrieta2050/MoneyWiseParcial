import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
selector: 'app-register',
templateUrl: './register.page.html',
styleUrls: ['./register.page.scss'],
standalone: false,
})
export class RegisterPage implements OnInit {
form!: FormGroup;

constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
) {}

ngOnInit(): void {
    this.form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    });
}

async onRegister(): Promise<void> {
    if (this.form.invalid) return;
    const loading = await this.loadingCtrl.create({ message: 'Creando cuenta...' });
    await loading.present();
    try {
    await this.authService.register(this.form.value.nombre, this.form.value.email, this.form.value.password);
    await loading.dismiss();
    const toast = await this.toastCtrl.create({ message: 'Cuenta creada exitosamente', duration: 2000, color: 'success' });
    await toast.present();
    this.router.navigate(['/auth/login']);
    } catch (error: unknown) {
    await loading.dismiss();
    const message = error instanceof Error ? error.message : 'Error al crear la cuenta';
    const toast = await this.toastCtrl.create({ message, duration: 3000, color: 'danger' });
    await toast.present();
    }
}

goToLogin(): void {
    this.router.navigate(['/auth/login']);
}
}
