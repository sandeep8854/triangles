let angle_1 = document.querySelector("#angle-1");
// console.log(angle_1);

let angle_2 = document.querySelector("#angle-2");
// console.log(angle_2);

let angle_3 = document.querySelector("#angle-3");
// console.log(angle_3);

let clickedButton = document.querySelector("#show-button");
let clearEv = document.querySelector("#clear");

// console.log(clickedButton);

let answer = document.querySelector(".output-text");

// console.log(answer);
let sum = 0;
clickedButton.addEventListener("click", checkEventHandler);
clearEv.addEventListener("click", clearHandler);

function checkEventHandler() {
  console.log(angle_1.value);
  console.log(angle_2.value);
  console.log(angle_3.value);
  let sum =
    Number(angle_1.value) + Number(angle_2.value) + Number(angle_3.value);
  if (angle_1.value != "" && angle_2.value != "" && angle_3.value != "") {
    if (sum === 180) {
      console.log("reached");
      //
      answer.style.backgroundColor = "#3EC70B";
      answer.innerHTML = `Hey! The angle ${angle_1.value} ,${angle_2.value} and ${angle_3.value} forms a triangle.💖`;
      console.log("True condition");
    } else {
      answer.style.backgroundColor = "#F32424";
      answer.innerText = `Opps, The angle do not form a Triangle.💔`;
    }
  } else {
    answer.style.backgroundColor = "#fff";
    answer.innerText = `Please Enter all the angle of triangle.🤔`;
    // answer.style.display = "block";
  }
}

function clearHandler() {
  angle_1.value = "";
  angle_2.value = "";
  angle_3.value = "";
  answer.innerHTML = "Your Answer will present in the box";
  answer.style.backgroundColor = "#ecd2ef";
}
