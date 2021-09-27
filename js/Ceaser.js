
const elCaesarForm = document.querySelector(".form")
const elCaesarInput = elCaesarForm.querySelector(".input-text")
const elCaesarOutput = elCaesarForm.querySelector(".result-text")
const selectRot = elCaesarForm.querySelector('#rot-select');


// Button which clears the textarea
function eraseText() {
  document.getElementById("caser-input").value = "";
  document.getElementById("result-input").value = "";
}

// Button which copies value of textarea
elCaesarForm.addEventListener("submit", (e) => {
  e.preventDefault()
  copyInputField(e.target.querySelector('.input-text').value)
}) 

const btn= document.querySelector(".paragraph1").addEventListener('click', (e) => {
  const textToCopy = document.querySelector(`[data-copy ="${e.target.id}"]`);
  copyParagraphText(textToCopy.innerText);
})
const copyInputField = (fieldToBeCopied) => {
  navigator.clipboard.writeText(fieldToBeCopied);
}
const copyParagraphText = (textTobeCopied) => {
  navigator.clipboard.writeText(textTobeCopied)
}



//ROT-SELECT function


function caser (str, amount) {
  // amount = 26 - amount;
  var result = "";
  for (var j = 0; j < str.length; j++) {
    var eachLetter = str[j];
    if (eachLetter.match(/[a-z]/ig)) {
      var code = str.charCodeAt(j);

      if (code >= 65 && code <= 90) {
        eachLetter = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      else if (code >= 97 && code <= 122) {
        eachLetter = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    result += eachLetter;
  }

  elCaesarOutput.value = result;
};

// inputni submitga aylantir
elCaesarForm.addEventListener('input', evt => {
  evt.preventDefault();
  let userInput = elCaesarInput.value;
  let userRot = Number(selectRot.value);

  caser(userInput, userRot);
});
