import { Injectable } from '@angular/core';
import { AppStore, AppStoreAction } from '../@interfaces/app-store';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService  implements AppStore{

  data$:BehaviorSubject<any>;

  constructor() { }

  dispatch(action: AppStoreAction): void {
    throw new Error("Method not implemented.");
  }

}
