import { Component, OnInit } from '@angular/core';
import { AppSearch } from '../@interfaces/app-search';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  images:AppSearch[] = (new Array(10)).fill(true)

  constructor() {
    console.log(this.images)
   }

  ngOnInit() {
  }

}
