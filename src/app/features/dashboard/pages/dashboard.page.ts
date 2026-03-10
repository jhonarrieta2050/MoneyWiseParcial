import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumenFinanciero } from '../../../core/models/resumen-financiero.model';
import { User } from '../../../core/models/user.model';
import { AnalyticsService } from '../../../core/services/analytics.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
    standalone: false,
})
export class DashboardPage implements OnInit {

    resumen: ResumenFinanciero | null = null;
    currentUser: User | null = null;
    mesActual: number = new Date().getMonth();
    anioActual: number = new Date().getFullYear();

    constructor(
        private authService: AuthService,
        private analyticsService: AnalyticsService,
        private router: Router,
    ) { }

    async ngOnInit(): Promise<void> {
        this.currentUser = this.authService.getCurrentUser();
        await this.loadData();
    }

    async ionViewWillEnter(): Promise<void> {
        this.mesActual = new Date().getMonth();
        this.anioActual = new Date().getFullYear();
        await this.loadData();
    }

    async loadData(): Promise<void> {
        this.resumen = await this.analyticsService.getResumenFinanciero();
    }

    goToTransacciones(): void {
        this.router.navigate(['/transacciones']);
    }

    goToNuevaTransaccion(): void {
        this.router.navigate(['/transacciones/nueva']);
    }

    async logout(): Promise<void> {
        await this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
}
