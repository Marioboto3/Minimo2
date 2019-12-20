import { Component, OnInit } from '@angular/core';
import {SeeStudiesService} from './see-studies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-see-studies',
  templateUrl: './see-studies.page.html',
  styleUrls: ['./see-studies.page.scss'],
})
export class SeeStudiesPage implements OnInit {

  constructor(private seeStudiesService: SeeStudiesService,
              private router: Router) { }

  ngOnInit() {
  }

  async changeTelecos(name: string) {
     await this.router.navigateByUrl('/list-studies/' + `${name}`);
  }

  async changeAeros(name: string) {
         await this.router.navigateByUrl('/list-studies/' + `${name}`);
  }

  async changeTelematica(name: string) {
         await this.router.navigateByUrl('/list-studies/' + `${name}`);
  }
}
