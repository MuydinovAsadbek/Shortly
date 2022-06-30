// Open form result
const elFormSubmitButton = document.querySelector('.form__button');
const elFormResult = document.querySelector('.results');

if(elFormSubmitButton) {
  elFormSubmitButton.addEventListener('click', function () {
    elFormResult.classList.add('results--open')
  });
};


const elStatisticsForm = document.querySelector('.section-statistics')
const elsCopyButton = document.querySelectorAll('.js-btn-copy');

elsCopyButton.forEach(function (elCopyButton) {
  elCopyButton.addEventListener('click', function () {
    elCopyButton.textContent = 'Copied!'


// Change button bgColor
    elCopyButton.classList.add('btn--results--active')

    // SetTimeout
    setTimeout(function () {
      elCopyButton.textContent = 'Copy'
      elCopyButton.classList.remove('btn--results--active')
    },1000)
  })
})
