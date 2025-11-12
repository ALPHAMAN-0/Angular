import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//this is call propertys
export class AppComponent {
  title = 'Todo-List';
  name = 'Todo List Application';
  //this think is time when i run load it it show first todo list after 2 secound it show siam hossain
  constructor(){
    setTimeout(() => {
      this.title = "SIAM Hossain"
    }, 2000);
  }
}
