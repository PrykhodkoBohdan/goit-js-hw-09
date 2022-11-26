import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
startBtn: document.querySelector("[data-start]"),
 daysEl: document.querySelector("[data-days]"),
 hoursEl: document.querySelector("[data-hours]"),
 minutesEl: document.querySelector("[data-minutes]"),
 secondsEl: document.querySelector("[data-seconds]"),
};

let startTime = 0;
let deltaTime = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        refs.startBtn.setAttribute("disabled", true);
        startTime = selectedDates[0].getTime();
        if (startTime < Date.now()) {
            Notiflix.Notify.warning('Please choose a date in the future');
            return;
        }
            refs.startBtn.removeAttribute("disabled");
            refs.startBtn.addEventListener('click',setTimer);
    }
    
  };

  flatpickr("#datetime-picker", options);

  function setTimer() {
    Notiflix.Notify.success('countdown!');
    const intervalId = setInterval(() => {
        
        const currentTime = Date.now();
        deltaTime = startTime - currentTime;
        const time = convertMs(deltaTime);
        
        refs.daysEl.textContent = time.days;
        refs.hoursEl.textContent = time.hours;
        refs.minutesEl.textContent = time.minutes;
        refs.secondsEl.textContent = time.seconds;

        if (time.days <= 0 && time.hours <= 0 && time.minutes <= 0 && time.seconds <= 0) {
            Notiflix.Notify.info('time out!');
        clearInterval(intervalId);
        return;
    }
    }, 1000);
}


  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}