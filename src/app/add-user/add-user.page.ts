import { Component, OnInit } from '@angular/core';
import {AddUserService} from './add-user.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AlertController, ToastController} from '@ionic/angular';
import {Student} from '../Models/Student';
import {Router} from '@angular/router';
import {Subject} from '../Models/Subject';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  student: Student;
  addUser: FormGroup;
  constructor(private addUserService: AddUserService,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              private router: Router,
              private toastCtrl: ToastController) {
    this.addUser = this.formBuilder.group({
      address: new FormControl(),
      name: new FormControl()});
  }
  ngOnInit() {
    this.student = new Student();
  }
  ionViewDidEnter() {
    this.student = new Student();
  }
  async create() {
    this.student.name = this.addUser.controls.name.value;
    this.student.address = this.addUser.controls.address.value;
    await this.addUserService.addStudent(this.student).subscribe(res => {
          console.log(res);
          this.router.navigateByUrl('/view-students'); });
  }
  addPhone() {
    this.alertCtrl.create({
      header: 'Phone',
      message: 'Add your phone here',
      inputs: [
          {
            name: 'number',
            placeholder: 'number'
          },
        {
          name: 'description',
          placeholder: 'description'
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: data => {
            this.student.phones.push({number: data.number, description: data.description});
            console.log(this.student.phones);
            this.launchToast('Phone added successfully');
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });
  }
  addStudies() {
    this.alertCtrl.create({
      header: 'Studies',
      message: 'Add your study here',
      inputs: [
        {
          name: 'studies',
          placeholder: 'study'
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: data => {
            this.student.studies.push({studies: data.studies});
            this.launchToast('Studies added successfully');
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });
  }
  async launchToast(message) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    await toast.present();
  }
}
