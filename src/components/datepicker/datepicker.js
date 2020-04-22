import 'air-datepicker';
// import './air-datepicker.css';
import './datepicker.scss';

$('.datepicker__elem').datepicker({
  language: 'ru',
  range: true,
  minDate: new Date(),
  multipleDates: true,
  multipleDatesSeparator: ' - ',
  clearButton: true,
  dateFormat: 'd M',
});
const buttonsList = document.querySelector('.datepicker--buttons');
const applyBtn = '<a class="button  button_theme_text button_theme_text--purple">Применить</a>';
let a = document.querySelector('span[data-action="clear"]');
try {
  a.classList.add('button', 'button_theme_text', 'button_theme_text--grey');
  buttonsList.insertAdjacentHTML('beforeend', applyBtn);
} catch (error) {}

const $start = $('.datepicker__start')
  .datepicker({
    onSelect: function (fd, d, picker) {
      $('.datepicker__start').val(fd.split('-')[0]);
      $('.datepicker__end').val(fd.split('-')[1]);
    },
  })
  .data('datepicker');

const $end = $('.datepicker__end');

$end.click(() => $('.datepicker__start').data('datepicker').show());
