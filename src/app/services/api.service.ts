import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getInfo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({});
      }, 1500);
    })
  }
}
