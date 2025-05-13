const textInput = document.getElementById('textInput');
const reversedText = document.getElementById('reversedText');

textInput.addEventListener('input', () => {
  reversedText.textContent = textInput.value.split('').reverse().join('');
});