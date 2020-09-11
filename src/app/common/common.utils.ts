import { endWith } from 'rxjs/operators';

export class CommonUtils {
  // Creates unique IDs
  static ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  // For use in toggling expandable text sections
  // - Depreciated in favor of moving larger text explanations to the FAQs section
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

  // Scrolls a specified element onto the screen
  static scrollElemIntoView = (id) => {
    setTimeout(function() {
      if (document.getElementById(id)) {
        document.getElementById(id).scrollIntoView({block: 'end', behavior: 'smooth'});
        // const elementScrollTop = document.getElementById(id).offsetTop + document.getElementById(id).offsetHeight;
        // window.scrollTo({top: elementScrollTop, behavior: 'smooth'});
      }
    })
  }
  
  // Scrolls the add ride dropdown to the top of the screen
  static scrollAddRideToTop = () => {
    setTimeout(function() {
      if (document.getElementById('select-ride-container')) {
        const addRideScrollTop = document.getElementById('select-ride-container').offsetTop;
        const logoHeight = document.getElementById('logo').offsetHeight;
        window.scrollTo({top: addRideScrollTop - logoHeight - 8, behavior: 'smooth'});
      }
    })
  }

  // Capitalizes the first character in a given string
  static capitalize = (str: String) => {
    return str.substring(0,1).toUpperCase() + str.substring(1, str.length);
  }

  // Used to check for duplicate items within a list
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

  // Used to play the blue flash animation whenever an item is added or updated by something outside of its context
  static flashItem = (item) => {
    // Create new flash animation element
    const newElem = document.createElement('div');
    newElem.classList.add('item-overlay', 'quick-flash');
    // Check if flash animation is already in progress on this item
    const elem = item.querySelector('.item-overlay');
    if (elem) {
      // If so, replace current flash animation
      item.replaceChild(newElem, elem);
    } else {
      // Otherwise, add new flash animation
      item.appendChild(newElem);
    }
    // Delete flash animation element after animation ends
    newElem.addEventListener('animationend', () => {
      item.removeChild(newElem);
    });
  }
}