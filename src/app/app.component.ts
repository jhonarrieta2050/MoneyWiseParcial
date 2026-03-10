import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { StorageService } from './core/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.storageService.init();
    await this.authService.init();
  }
}
