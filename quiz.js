let quiz_form = document.querySelector(".triangle-quiz-form");

console.log(quiz_form);

let = checking = document.querySelector(".btn");
console.log(checking);

let answer_ = document.querySelector(".answer");
console.log(answer_);

let answerKeys = [
  "45",
  "6",
  "Equilateral",
  "3",
  "2",
  "36",
  "32",
  "A Right Triangle",
];

checking.addEventListener("click", checkEventHandler);

function checkEventHandler() {
  let index = 0;
  let marks = 0;
  //console.log("clicked");
  let resultFormat = new FormData(quiz_form);
  // console.log(res.values());
  for (let ans of resultFormat.values()) {
    console.log(ans);
    if (ans == answerKeys[index]) {
      marks++;
    }
    index++;
  }
  answer_.innerText = `Your score is ${marks * 2}`;
}
