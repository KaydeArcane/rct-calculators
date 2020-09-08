import { endWith } from 'rxjs/operators';

export class CommonUtils {
  static ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  static toggleSection = (target) => {
    const state = target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true';
    target.setAttribute('aria-pressed', state);
    const parent = <HTMLElement>target.parentElement;
    if (parent && parent.classList && parent.classList.contains('open')) {
      parent.classList.remove('open');
    } else {
      parent.classList.add('open');
    }
  }

  static scrollElemIntoView = (id) => {
    setTimeout(function() {
      if (document.getElementById(id)) {
        document.getElementById(id).scrollIntoView({block: 'end', behavior: 'smooth'});
        // const elementScrollTop = document.getElementById(id).offsetTop + document.getElementById(id).offsetHeight;
        // window.scrollTo({top: elementScrollTop, behavior: 'smooth'});
      }
    })
  }
  
  static scrollAddRideToTop = () => {
    setTimeout(function() {
      if (document.getElementById('select-ride-container')) {
        const addRideScrollTop = document.getElementById('select-ride-container').offsetTop;
        const logoHeight = document.getElementById('logo').offsetHeight;
        window.scrollTo({top: addRideScrollTop - logoHeight - 8, behavior: 'smooth'});
      }
    })
  }

  static capitalize = (str: String) => {
    return str.substring(0,1).toUpperCase() + str.substring(1, str.length);
  }

  static checkForDupes = (list, newItem) => {
    let found = null;

    // Iterate thru list looking for duplicates
    list.every((item, idx) => {
      if (item.getId() === newItem.getId()) {
        // If duplicate found, set found to the item idx
        found = idx;
        // If item is found, escape loop
        return false;
      }
      return true;
    });

    return found;
  }

  static flashItem = (item) => {
    const newElem = document.createElement('div');
    newElem.classList.add('item-overlay', 'quick-flash');
    const elem = item.querySelector('.item-overlay');
    if (elem) {
      item.replaceChild(newElem, elem);
    } else {
      item.appendChild(newElem);
    }
    newElem.addEventListener('animationend', () => {
      item.removeChild(newElem);
    });
  }
}