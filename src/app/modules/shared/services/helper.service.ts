import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  toLocalDateTime(date: string){
    const rawDate = new Date(date);
    const stringDate = rawDate.toLocaleDateString('en-US',
    { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'});
    return stringDate;
  }
}
