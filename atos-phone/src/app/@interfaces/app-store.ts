import { BehaviorSubject } from 'rxjs';
import { Actions } from '../@enums/actions.enum';

export interface AppStoreAction {
    type:Actions;
    data?:any;
}  

export interface AppStore {

  data$:BehaviorSubject<any> // Obervable

  dispatch(action:AppStoreAction):void;

}
