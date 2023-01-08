import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const refs = {
  formCreatePromises: document.querySelector('.form'),
  btnCreatePromise: document.querySelector('button'),
};
refs.formCreatePromises.addEventListener('submit', onFormCreatePromisesSubmit);

function onFormCreatePromisesSubmit(e) {
  e.preventDefault();

  const inputFirstDelay = Number(e.target.elements.delay.value);
  const inputDelayStep = Number(e.target.elements.step.value);
  const inputAmountPromises = Number(e.target.elements.amount.value);

  let counter = 1;

  function countPromise() {
    if (counter <= inputAmountPromises) {
      createPromise(counter, counter === 1 ? inputFirstDelay : inputDelayStep)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        })
        .finally(() => {
          counter++;
          countPromise();
        });
    } else {
      return (counter = 1);
    }
  }
  countPromise();
}

// setTimeout(() => {
//   for (let i = 1; i <= inputAmountPromises; i += 1) {
//     createPromise(i, inputDelayStep)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`
//         );
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`
//         );
//       });
//   }
// }, inputFirstDelay);
