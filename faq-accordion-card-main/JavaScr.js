const OpenButt = document.querySelectorAll("button");
const answer = document.querySelectorAll("p");
let x;
function Open(area) {
  if (x == 1) {
    answer[area].classList.add("answer");
    return (x = 0);
  } 
  else {
    answer[area].classList.remove("answer");
    return (x = 1);
  }
}
for (let i = 0; i < OpenButt.length; i++) {
  OpenButt[i].addEventListener("click", function () {
    Open(i);
  });
}