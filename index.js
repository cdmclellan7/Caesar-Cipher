var output = document.getElementById("results");

//display the results
function displayResults(num) {
  //adjusts shift for encoding (num=1) and decoding (num=-1)
  let shift = (26 + (num * document.getElementById("shift-num").value)) % 26;
  
  output.innerHTML = caesarCipher(document.getElementById("input").value, shift);
}

//resets the results
function resetResults() {
  output.innerHTML = "";
}


//do the cipher
function caesarCipher(str, shift) { 

  //function to be passed into the replace method
  function rotate(match) {
    let baseCode = 0;
    //deal with both lowercase and uppercase letters
    (match.charCodeAt(0) > 90)? baseCode = 97 : baseCode = 65;
    return String.fromCharCode((match.charCodeAt(0)-baseCode + shift) % 26 + baseCode );
  }
  
  return str.replace(/[A-Z]/gi, rotate);
}