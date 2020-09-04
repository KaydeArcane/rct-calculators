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

  static scrollElemToTop = (id) => {
    setTimeout(function() {
      if (document.getElementById(id)) {
        const elementScrollTop = document.getElementById(id).offsetTop;
        window.scrollTo({top: elementScrollTop - 195, behavior: 'smooth'});
      }
    })
  }
}