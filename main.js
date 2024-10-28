// LUMINENCE CALCULATOR

document.getElementById("calc").addEventListener("click", calcLuminance);

function calcLuminance() {
  let R = Number(document.getElementById("R").value);
  let G = Number(document.getElementById("G").value);
  let B = Number(document.getElementById("B").value);

  let calc = Math.sqrt(0.299 * R ** 2 + 0.587 * G ** 2 + 0.114 * B ** 2);

  let answer = (document.getElementById("answer-output").innerHTML = calc);
}
