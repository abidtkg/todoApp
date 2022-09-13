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

  removeOne(id: string, data: any){
    const filterdData = data.filter((t: { _id: any; }) => t._id !== id);
    return filterdData;
  }
}
