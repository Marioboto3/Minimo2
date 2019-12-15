import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Subject} from '../Models/Subject';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  subjects: Subject[];
  constructor(private homeService: HomeService,
              private router: Router,
  ) {}

  ngOnInit() {
    console.log('Home');
    this.homeService.getSubjects().subscribe(res => {
      console.log(res);
      this.subjects = res as Subject [];
    });
  }
  async changePage(_id: string) {
    await this.router.navigateByUrl('/profile-subject/' + `${_id}`);
  }

}
