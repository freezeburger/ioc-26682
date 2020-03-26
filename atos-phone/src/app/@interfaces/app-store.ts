import { BehaviorSubject } from 'rxjs';

export interface AppStoreAction {
    type:string;
    data?:any;
}  

export interface AppStore {

  data$:BehaviorSubject<any> // Obervable

  dispatch(action:AppStoreAction):void;

}
