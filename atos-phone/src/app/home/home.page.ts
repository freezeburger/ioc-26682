import { Component, OnInit, OnChanges, DoCheck, OnDestroy, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { AppUser } from '../@interfaces/app-user';
import { StoreService } from '../services/store.service';
import { Actions } from '../@enums/actions.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit, OnChanges, DoCheck, OnDestroy {

  time = Date.now();
  loading = false;

  credentials: Pick<AppUser, 'name' | 'email'> = {
    name: '',
    email: ''
  }

  // Component LifeCyle Hooks
  constructor(
    public store: StoreService
  ) {
    console.log(this.store)
    setInterval(() => this.time = Date.now(), 1000)

    this.store.data$.subscribe(
      ()=> this.toggleLoading(false)
    )
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


  //------------------------------------------------------
  toggleLoading(force?:boolean){
   this.loading = (force !== undefined) ? force : (!this.loading);
  }
  connect() {

    // const data = Object.assign( {} ,  this.credentials );
    const data =  { ...this.credentials};

    this.toggleLoading( true ) ;

    this.store.dispatch(
      { type: Actions.USER_LOGIN, data }
    );

  }


}
