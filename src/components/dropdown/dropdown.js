import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
// import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import './dropdown.scss';

$(document).ready(function () {
  $('.no-config').iqDropdown();

  $('.custom').iqDropdown({
    minItems: 1,
    maxItems: 5,
    selectionText: 'гость',
    textPlural: 'гостя',
    onChange: function (id, count, totalItems) {
      console.log(id, count, totalItems);
    },
    beforeDecrement: function (id, itemCount) {
      if (id === 'adult') {
        return itemCount.adult > itemCount.infant;
      }
      return true;
    },
    beforeIncrement: function (id, itemCount) {
      if (id === 'infant') {
        return itemCount.adult > itemCount.infant;
      }
      return true;
    },
  });

  $('.custom-message').iqDropdown({
    minItems: 0,
    onChange: function (id, count, totalItems) {
      console.log(id, count, totalItems);
    },
    setSelectionText: function (itemCount, totalItems) {
      const items = Object.keys(itemCount)
        .map((key) => itemCount[key])
        .join(' + ');
      return items + ' = ' + totalItems;
    },
  });

  const inc = document.querySelectorAll('i.icon-decrement.icon-increment');
  inc.forEach((el) => el.classList.remove('icon-decrement'));
});
