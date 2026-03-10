import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
selector: 'app-login',
templateUrl: './login.page.html',
styleUrls: ['./login.page.scss'],
standalone: false,
})
export class LoginPage implements OnInit {
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
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    });
}

async onLogin(): Promise<void> {
    if (this.form.invalid) return;
    const loading = await this.loadingCtrl.create({ message: 'Iniciando sesión...' });
    await loading.present();
    try {
    await this.authService.login(this.form.value.email, this.form.value.password);
    await loading.dismiss();
    this.router.navigate(['/dashboard']);
    } catch (error: unknown) {
    await loading.dismiss();
    const message = error instanceof Error ? error.message : 'Error al iniciar sesión';
    const toast = await this.toastCtrl.create({ message, duration: 3000, color: 'danger' });
    await toast.present();
    }
}

goToRegister(): void {
    this.router.navigate(['/auth/register']);
}
}
