const textInput = document.getElementById('textInput');
const reverseBtn = document.getElementById('reverseBtn');
const reversedText = document.getElementById('reversedText');

textInput.addEventListener('input', () => {
  if (textInput.value.length > 3) {
    reverseBtn.style.display = 'inline-block';
  } else {
    reverseBtn.style.display = 'none';
    reversedText.textContent = ''; // Clear previous reversed text if input becomes short
  }
});

reverseBtn.addEventListener('click', () => {
  reversedText.textContent = textInput.value.split('').reverse().join('');
});
