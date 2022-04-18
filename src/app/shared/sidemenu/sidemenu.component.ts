import { Component } from '@angular/core';

interface MenuItem{
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  templateMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './template/basics'
    },
    {
      text: 'Dinámicos',
      route: './template/dynamic'
    },
    {
      text: 'Switches',
      route: './template/switches'
    }
  ]

  reactiveMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './reactive/basics'
    },
    {
      text: 'Dinámicos',
      route: './reactive/dynamic'
    },
    {
      text: 'Switches',
      route: './reactive/switches'
    }
  ]

  authMenu: MenuItem[] = [
    {
      text: 'Registro',
      route: './auth/register'
    }
  ]
}
