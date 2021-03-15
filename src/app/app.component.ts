import { Component, ViewChild } from '@angular/core';
// import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'version1';
  joinroom:boolean=false;
  createroom:boolean=false;
  // @ViewChild('f') signupForm: NgForm;
  myimage:string="assets/image.gif";
  onEdit()
  {
    this.joinroom=true;
  }
  onPress()
  {
    this.createroom=true;
  }
}
