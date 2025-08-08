import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Declare jQuery to avoid TypeScript errors
declare var $: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo-List';
  
  constructor(){
    setTimeout(() => {
      this.title = "title change to siam"
    }, 2000);
  }

  // Example method using jQuery
  ngAfterViewInit() {
    // Example: Change background color using jQuery
    $('body').css('background-color', '#f8f9fa');
    
    // Example: Add click event to any button with class 'jquery-btn'
    $('.jquery-btn').click(function(this: any) {
      $(this).fadeOut().fadeIn();
    });
  }
}
