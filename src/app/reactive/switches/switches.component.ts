import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit{

  ngOnInit(){
    this.myForm.reset({...this.person, conditions: false});
  }

  myForm:FormGroup = this.fb.group({
    typeJob: ['R', Validators.required],
    notifications: [true, Validators.required],
    conditions: [false, Validators.requiredTrue]
  });

  person = {
    typeJob: 'R',
    notifications: true
  }

  constructor(private fb:FormBuilder) { }

  save(){
    const formValue = {...this.myForm.value};
    delete formValue.conditions;
    this.person = formValue;
  }
}
