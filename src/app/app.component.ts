import {Component, OnInit} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {InitNotifierService} from './init-notifier.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  charging: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private initNotifierService: InitNotifierService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      setTimeout(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }, 10000);
    });
  }

  ngOnInit(): void {
    this.initNotifierService.selectInitialized().subscribe((charging) => {
      this.charging = charging;
    });
  }
}
