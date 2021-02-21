buttonElement = document.querySelector('#btn');
inputElement = document.querySelector('input');

buttonElement.addEventListener('click', function(e) {
  var txt = inputElement.value;
  txt != '' ? console.log(txt) : alert('Type something, bitch');
  e.target.style.border = '1px solid blue';
});