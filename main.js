let serial = document.querySelector("div");
let generate = document.querySelector("span");
generate.onclick = function () {
  let character =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let pass = "";
  let num = 10;
  for (i = 0; i < num; i++) {
    pass += character[Math.floor(Math.random() * character.length)];
  }
  serial.innerHTML = pass;
};
