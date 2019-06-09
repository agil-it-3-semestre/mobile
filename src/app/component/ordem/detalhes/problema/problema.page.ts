import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-problema',
  templateUrl: './problema.page.html',
  styleUrls: ['./problema.page.scss'],
})
export class ProblemaPage implements OnInit {

  public problema : any;

  constructor(public activeRoute : ActivatedRoute) {
    debugger;
    this.problema = this.activeRoute.snapshot.paramMap.get('problema');
    console.log(this.problema)
  }

  ngOnInit() {
  }


}
