import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name=step]'),
  amount: document.querySelector('[name=amount]'),
  form: document.querySelector('.form'),
};

let {delay,step,amount,form} = refs;

form.addEventListener('submit',createPromiseStart)

function createPromiseStart(e) {
  e.preventDefault();
  step = Number(step.value);
  delay = Number(delay.value);
  amount = Number(amount.value);
  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
           // Fulfill
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
          // Reject
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
};

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) =>
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  );
  return promise;
};
