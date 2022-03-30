import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person{
  name: string;
  favorites: Favorite[]
}

interface Favorite{
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent{
@ViewChild('myForm') myForm!:NgForm; 

  newGame: string = '';

  person:Person = {
    name: 'Andrés',
    favorites: [
      {
        id: 1,
        name: 'SFV'
      },
      {
        id: 2,
        name: 'CS:GO'
      }
    ]
  }


  validName():boolean{
    return this.myForm?.controls['name']?.invalid && this.myForm.controls['name']?.touched
  }

  delete(index:number){
    this.person.favorites.splice(index, 1)
  }

  addGame(){
    const newGeim:Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    }
    
    this.person.favorites.push({...newGeim});

    this.newGame = '';
  }
  
  save(){

  }
}
