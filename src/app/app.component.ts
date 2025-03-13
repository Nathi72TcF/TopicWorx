import { CommonModule } from '@angular/common';
import { ApplicationRef, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { Platform, MenuController, LoadingController } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ConnectivityService } from './service/connectivity.service';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

const MINUTES_UNITL_AUTO_LOGOUT = 5; // in mins
const CHECK_INTERVAL = 3000; // in ms
const STORE_KEY = 'lastAction';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
  }
  public setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }

  constructor(
    private platform: Platform,
    public afAuth: AngularFireAuth,
    public router: Router,
    private alertController: AlertController,
    // private themeservice: ThemeService,
    public loadingController: LoadingController,
    private menuCtrt: MenuController,
    public connectivityProvider: ConnectivityService,
    private update: SwUpdate
  ) {
    this.checkOnLineActivity();
  }

  checkOnLineActivity() {
    this.connectivityProvider.appIsOnline$.subscribe((online) => {
      // console.log('is app online?',online);

      setTimeout(() => {
        if (online) {
          // call functions
          this.updateClient();
        } else {
          // app is off line
          console.log('App Offline');
        }
      }, 500);
    });
  }

  updateClient() {
    if (!this.update.isEnabled) {
      // console.log('App Update is not available');
      return;
    }

    this.update.available.subscribe((event) => {
      console.log(
        'current update',
        event.current,
        'available update',
        event.available
      );
      if (confirm('New Update Available please comfirm')) {
        this.update.activateUpdate().then(() => location.reload());
      }
    });

    this.update.activated.subscribe((event) => {
      console.log(
        'Current App',
        event.previous,
        'Available App',
        event.current
      );
    });
  }

  toggleDarkTheme() {
    // this.themeservice.toggleAppTheme();
  }
}
