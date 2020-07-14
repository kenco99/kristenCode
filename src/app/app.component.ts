import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { errorMessage } from '../app/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Assignment';
  detailForm: FormGroup;
  error = errorMessage;
  showInput = false; // toggle password

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.detailForm = this.formBuilder.group({
      last_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      ssn: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      dob: ['', Validators.required],
    });
  }

  toggleDisplay() {
    // show/hide password
    this.showInput = !this.showInput;
  }
}
