import 'air-datepicker';
// import './air-datepicker.css';
import './datepicker.scss';
{
  $('.datepicker__elem').datepicker({
    language: 'ru',
    range: true,
    minDate: new Date(),
    multipleDates: true,
    multipleDatesSeparator: ' - ',
    clearButton: true,
    dateFormat: 'd M',
  });
  const buttonsList = document.querySelectorAll('.datepicker--buttons');
  const applyBtn = '<a class="button  button_theme_text button_theme_text--purple">Применить</a>';
  let clearBtn = document.querySelectorAll('span[data-action="clear"]');
  try {
    clearBtn.forEach((el) =>
      el.classList.add('button', 'button_theme_text', 'button_theme_text--grey')
    );
    // buttonsList.insertAdjacentHTML('beforeend', applyBtn);
    buttonsList.forEach((el) => el.insertAdjacentHTML('beforeend', applyBtn));
  } catch (error) {}

  const $start = $('.datepicker__elem--start');
  const $end = $('.datepicker__elem--end');

  const $datepicker = $start
    .datepicker({
      onSelect: function (fd, d, picker) {
        $start.val(fd.split('-')[0]);
        $end.val(fd.split('-')[1]);
      },

      dateFormat: 'dd.mm.yyyy',
    })
    .data('datepicker');

  $end.click(() => $datepicker.show());
}
