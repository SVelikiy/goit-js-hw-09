let formData = {
  email: '',
  message: ''
};

const localValue = JSON.parse(localStorage.getItem('feedback-form-state'));
function emptyLocal() {
    if (localValue) {
        formData = localValue;
        email.value = localValue.email;
        message.value = localValue.message;
    }

    else return;
}

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input')
const message = document.querySelector('textarea')



form.addEventListener('input', handlerInput);
form.addEventListener('submit',handlerSubmit)
function handlerInput() {
  formData = {
    email: email.value,
    message: message.value,
    };
    console.log(formData);
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}



function handlerSubmit(evt) {
evt.preventDefault();
    if (formData.email === '' || formData.message === '') {
      return alert('Fill please all fields');
    }
    console.log(localStorage.getItem('feedback-form-state'));
    localStorage.clear();
    form.reset();
}

emptyLocal();


