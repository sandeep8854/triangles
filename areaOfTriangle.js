let base_ = document.querySelector("#base");
console.log(base_);

let height_ = document.querySelector("#height");
console.log(height_);

let clickedButton = document.querySelector("#show-button");
let clearEv = document.querySelector("#clear");

let answer = document.querySelector(".output-text");
console.log(answer.innerText);
clickedButton.addEventListener("click", clickHandlerFunc);
clearEv.addEventListener("click", clearHandlerFunc);

function clickHandlerFunc() {
  //
  // console.log(typeof base_.value);
  if (base_.value != "" && height_.value != "") {
    if (Number(base_.value) > 0 && Number(height_.value) > 0) {
      let area = (Number(base_.value) * Number(height_.value)) / 2;
      //   let base1 = Number(base_.value * base_.value);
      //   let height1 = Number(height_.value * height_.value);
      //   let add = base1 + height1;
      //   let find_hypotenuse = Math.sqrt(add);
      //   console.log(find_hypotenuse.toFixed(2));
      answer.style.backgroundColor = "#fff";
      answer.innerText = `The area of triangle whose base is ${base_.value} and height is ${height_.value} is :  ${area}`;
    } else {
      answer.style.backgroundColor = "#F32424";
      answer.innerText = `The base and height both should be positive of Triangle.`;
    }
  } else {
    answer.style.backgroundColor = "#F32424";
    answer.innerText = `Please enter both base and height to get the Area.`;
  }
}
function clearHandlerFunc() {
  base_.value = "";
  height_.value = "";
  answer.innerHTML = "Your Answer will present in the box";
  answer.style.backgroundColor = "#ecd2ef";
}
