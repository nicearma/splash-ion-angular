import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitNotifierService {

  initializedSubjet = new BehaviorSubject<boolean>(false);

  haveBeenInitialized() {
    this.initializedSubjet.next(true);
  }

  selectInitialized() {
    return this.initializedSubjet.asObservable();
  }

}
