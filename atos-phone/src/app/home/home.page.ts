import { Component, OnInit, OnChanges, DoCheck, OnDestroy, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { AppUser } from '../@interfaces/app-user';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit, OnChanges, DoCheck, OnDestroy {

  time = Date.now();

  credentials:Pick< AppUser,  'name' | 'email'>;

  // Component LifeCyle Hooks
  constructor(
    public  store: StoreService
  ) { 
    console.log(this.store)
    setInterval( () => this.time = Date.now(),1000)
  }

  // One time : Only attributes are changed from the outside
  ngOnChanges(changes: SimpleChanges): void {
  }

  // One Time when Added
  ngOnInit() {
  }

  // Any Time Something changes
  ngDoCheck(): void {
   // console.table(this)
  }

  // One Time when Destroyed
  ngOnDestroy(): void {
  }



}
