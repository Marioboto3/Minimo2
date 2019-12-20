import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Add user',
      url: '/add-user',
      icon: 'person'
    },
    {
      title: 'Add subject',
      url: '/add-subject',
      icon: 'filing'
    },
    {
      title: 'Subjects',
      url: '/view-subjects',
      icon: 'contact'
    },
    {
      title: 'Students',
      url: '/view-students',
      icon: 'chatboxes'
    },
    {
      title: 'Studies',
      url: '/see-studies',
      icon: 'cube'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
