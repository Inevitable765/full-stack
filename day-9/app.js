
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default form submission

  const bearName = document.querySelector('input[placeholder="Bear Name"]').value;
  const name = document.querySelector('input[placeholder="Name"]').value;
  const password = document.querySelector('input[type="password"]').value;
  const rangeInput = document.getElementById('rangeinput').value;

  console.log('Bear Name:', bearName);
  console.log('Name:', name);
  console.log('Password:', password);
  console.log('Range Input:', rangeInput);
});