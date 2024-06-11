import { Component, OnInit } from '@angular/core';

import {ASTRONAUTS} from "../mock-data";

// import { routing } from './app/app.routing';

// import { ServicesService } from './services.service';

@Component({
  selector: 'app-astronaut-list',
  templateUrl: './astronaut-list.component.html',
  styleUrls: ['./astronaut-list.component.css']
})
export class AstronautListComponent implements OnInit {

  public show_view : boolean = false;
  public button_name : any = 'View Info';
  name='';

  public data = ASTRONAUTS;

  constructor() { }

  ngOnInit() {
  }

  viewImages(name) {
    // window.open("https://www.google.com/search?q="+name+"&safe=strict&hl=en-IN&authuser=0&rlz=1C1GCEU_enIN821IN822&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjzp8zb7KHhAhUjguYKHbZRBbAQ_AUIESgE&biw=1920&bih=969");
     window.location.assign("https://www.google.com/search?q="+name+"&safe=strict&hl=en-IN&authuser=0&rlz=1C1GCEU_enIN821IN822&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjzp8zb7KHhAhUjguYKHbZRBbAQ_AUIESgE&biw=1920&bih=969");
  }

  viewInfo(name) {
    // window.open("https://www.google.com/search?q="+name);
    window.location.assign("https://www.google.com/search?q="+name);
  }

  toggle(data) {
    if(data.name === this.name){
    this.show_view = false;
    this.name = '';
    }
    else{
       this.show_view = true;
      this.name = data.name
    }
    
    // if(this.show_view)
    //   this.button_name = "Hide Info";
    // else
    //   this.button_name = "View Info";
  }

}