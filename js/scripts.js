//business
const countTo = 30; // input form for user 
const countBy = 3; // input form for user

function countUp(countTo, countBy) {
  let numArr = []; 
  let result = 0;

  for (let index = 1; result <= countTo; index++) {
    result = countBy * index;
    numArr.push(result);
  }
  return numArr.join(", ");
}

//UI Logic
function hideResults() {
  document.getElementById("output").innerText = null;
}
function handleEvent(e) {
  e.preventDefault();
  hideResults();
  let countToNum = document.querySelector("input#count-to").value;
  let countByNum = document.getElementById("count-by").value;
  
  let result = countUp(countToNum, countByNum);
  
  const output = document.getElementById("output");
  output.innerText = "Results: " + (" " + result);
  // const p = document.createElement("p");
  // output.append(p);
  // p.innerText = "Results: " + (" " + result);
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleEvent);
});
  