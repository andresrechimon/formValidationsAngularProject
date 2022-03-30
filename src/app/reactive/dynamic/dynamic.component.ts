import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {

  myForm:FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array([
      ['SFV', [Validators.required]],
      ['CS:GO', [Validators.required]]
    ], Validators.required)
  });

  newFavorite: FormControl = this.fb.control('', Validators.required)

  get favoritesArr(){
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb:FormBuilder) { }

  validField(field:string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  addFavorite(){
    if(this.newFavorite.invalid){
      return;
    }
    this.favoritesArr.push(new FormControl(this.newFavorite.value, Validators.required));

    this.newFavorite.reset();
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    this.myForm.reset();
  }

  delete(i:number){
    this.favoritesArr.removeAt(i);
  }
}
