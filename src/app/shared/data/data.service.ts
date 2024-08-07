import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private successSource=new BehaviorSubject(false);
  currentSuccess=this.successSource.asObservable();

  constructor() { }

  changeSuccess(success:boolean){
    this.successSource.next(success);
  }
}
