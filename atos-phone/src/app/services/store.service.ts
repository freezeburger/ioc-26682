import { Injectable } from '@angular/core';
import { AppStore, AppStoreAction } from '../@interfaces/app-store';
import { BehaviorSubject } from 'rxjs';
import { Actions } from '../@enums/actions.enum';

@Injectable({
  providedIn: 'root'
})
export class StoreService  implements AppStore{

  data$:BehaviorSubject<any> = new BehaviorSubject({})

  constructor() { }

  dispatch(action: AppStoreAction): void {
      console.table(action);

      switch (action.type) {
        case Actions.USER_LOGIN:
          setTimeout(
            ()=>this.data$.next(
              { currentUser:action.data }
            )
          , 5000 * Math.random() )
          break;
      }
  }

}
