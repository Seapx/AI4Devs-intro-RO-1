document.getElementById('reverseBtn').addEventListener('click', () => {
  const input = document.getElementById('textInput').value;
  document.getElementById('reversedText').textContent = input.split('').reverse().join('');
});
