//less optimal
const btn = document.querySelector("#btn");
btn.onclick = () => alert("hello world");

//more optimal/flexible
const btnbtn = document.querySelector("#btn2");
btnbtn.addEventListener("click", () => {
    alert("Hello world, again");
});

//alternative example with named functions
// METHODS 2 & 3
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  const btn3 = document.querySelector("#btn3");
  
  // METHOD 2
  btn3.onclick = alertFunction;
  
  // METHOD 3
  btn3.addEventListener("click", alertFunction);

// 'e'
btn.addEventListener("click", function (e) {
    console.log(e);
    //return pointer event
  });

  btn.addEventListener("click", function (e) {
    console.log(e.target);
    //return node clicked
  });

  btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
    // changes the buttons style on click
  });

  // create a node list of buttons
  const buttons = document.querySelectorAll("button");
  console.log(buttons);
  // for each button create a click listener and alert the buttons id.
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
  });