import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  get = (key) => {
    return JSON.parse(this.localStorage.getItem(key));
  }

  set = (key, item) => {
    this.localStorage.setItem(key, JSON.stringify(item));
  }

  clear = (key) => {
    this.localStorage.removeItem(key);
  }
}
