let panelState = 'rating'
// panelState = 'thankyou';

const ratingForm = document.querySelector('#rating-form')
const textResult = document.querySelector('.text-result')
const btnSubmit = document.querySelector('.btn-submit')

// maybe hard code the inital undisplay classes in the html
// but leave like this for now
const ratingPanel = document.querySelector('.rating.panel')
const thankyouPanel = document.querySelector('.thankyou.panel')

if (panelState !== 'thankyou') {
  thankyouPanel.classList.toggle('undisplay')
}

if (panelState !== 'rating') {
  ratingPanel.classList.toggle('undisplay')
}

// now the form submit action
ratingForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let ratingValue = document.querySelector(
    'input[name="rating-radio"]:checked'
  )?.value

  if (!ratingValue) {
    // if there's no ratingValue it means that no radio
    // button was checked, so go no further

    // but before we return, unfocus the submit button
    btnSubmit.blur()
    return
  }
  let rating = ratingValue?.slice(-1)
  textResult.innerText = rating

  // put the transition in a timeout so it's not as abrupt
  setTimeout(() => {
    ratingPanel.classList.toggle('undisplay')
    thankyouPanel.classList.toggle('undisplay')
  }, 200)
})
