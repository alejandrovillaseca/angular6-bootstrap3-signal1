import { Component, OnInit } from '@angular/core';
// import { TestService } from '../../services/test.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  posts: any;

  // constructor(myServices: TestService) {
    constructor() {
    // console.log(myServices.getRestItems());
    // this.posts = myServices.getRestItems();
    // console.log(this.posts);
  }
  ngOnInit() {
  }

}
