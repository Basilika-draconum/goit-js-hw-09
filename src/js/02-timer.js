import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputDateTime: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates < this.defaultDate) {
      alert('Please choose a date in the future');
    }
    console.log(selectedDates[0]);
  },
};
const fp = flatpickr(refs.inputDateTime, options);
