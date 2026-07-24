

const lengthInput = document.querySelector('#length');

const generateBtn = document.querySelector('#btn');

const passwordDisplay = document.querySelector('#password');

const uppercaseCheckbox = document.querySelector('#uppercase');

const lowercaseCheckbox = document.querySelector('#lowercase');

const numbersCheckbox = document.querySelector('#numbers');

const symbolsCheckbox = document.querySelector('#special');

console.log(uppercaseCheckbox);
console.log(lowercaseCheckbox);
console.log(numbersCheckbox);
console.log(symbolsCheckbox);

const copyBtn = document.querySelector('#copy');

const charSets = 'abcdefghijklmnopqrstuvwxyz';

const uppercaseChars = charSets.toUpperCase();

const lowercaseChars = charSets.toLowerCase();

const numbers = '0123456789';

const symbols = '!@#$%^&*()_+~\:;?><,./-=';

const createPassword = () => {
  let finalPassword = '';
  let randomPassword = '';
  randomPassword += uppercaseCheckbox.checked ? uppercaseChars : '';
  randomPassword += lowercaseCheckbox.checked ? lowercaseChars : '';
  randomPassword += numbersCheckbox.checked ? numbers : '';
  randomPassword += symbolsCheckbox.checked ? symbols : '';
 
  console.log(randomPassword);
  console.log(randomPassword.length);
 for (let x = 0; x < lengthInput.value; x++) {
    let random = Math.floor(Math.random() * randomPassword.length);
  finalPassword += randomPassword[random];
  console.log(finalPassword);
}
return passwordDisplay.value = finalPassword;
}



generateBtn.addEventListener('click', () => {
  console.log(createPassword());
});

copyBtn.addEventListener("click", () => {
   navigator.clipboard.writeText(passwordDisplay.value);
    console.log("Copied");
  });