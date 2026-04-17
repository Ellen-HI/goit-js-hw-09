const form = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};
form.addEventListener('input', handlerInput);
function handlerInput(event) {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
const local = localStorage.getItem('feedback-form-state');

if (local) {
  const parse = JSON.parse(local);
  formData.email = parse.email || '';
  formData.message = parse.message || '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
form.addEventListener('submit', handlerBtn);
function handlerBtn(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}
