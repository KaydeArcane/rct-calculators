import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  // Gets local storage item at given key and parses it as JSON
  get = (key) => {
    return JSON.parse(this.localStorage.getItem(key));
  }

  // Sets local storage item as a string at given key
  set = (key, item) => {
    this.localStorage.setItem(key, JSON.stringify(item));
  }

  // Removes local storage item at given key
  clear = (key) => {
    this.localStorage.removeItem(key);
  }
}
