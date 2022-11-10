const panel = document.getElementById("panel");
const ops = ["+", "-", "*", "÷", "2".sup()];
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var inputs = [];
var calc = [""];

function display(name) {
  panel.innerHTML += name;
  inputs.push(name);
}

function supscript(name) {
  panel.innerHTML += name.sup();
  panel.style.height = "100px";
}

function equals() {
  console.log(calc);
  console.log(inputs);
  if (inputs.length === 0 || ops.includes(inputs[0]) || ops.includes(inputs[inputs.length - 1])) {
    panel.innerHTML = "ERROR!";
  } else {
    for (var i = 0; i < inputs.length - 1; i++) {
      if (ops.includes(inputs[i]) && ops.includes(inputs[i + 1])) {
        panel.innerHTML = "ERROR!";
      }
    }

    for (var i = 0; i < inputs.length; i++) {
      if (!ops.includes(inputs[i])) {
        calc[calc.length - 1] += inputs[i];
      } else {
        calc.push(inputs[i]);
        calc.push("");
      }
    }
  }

  console.log("before calc");
  console.log(inputs);
  console.log(calc);
  for (var i = 0; i < calc.length; i++) {
    if (ops.includes(calc[i])) {
      if (calc[i] === "+") {
        calc[i] = parseInt(calc[i - 1]) + parseInt(calc[i + 1]);
        calc[i] = calc[i].toString();
        calc.splice(i - 1, 1);
        calc.splice(i, 1);
      } else if (calc[i] === "-") {
        calc[i] = parseInt(calc[i - 1]) - parseInt(calc[i + 1]);
        calc[i] = calc[i].toString();
        calc.splice(i - 1, 1);
        calc.splice(i, 1);
      } else if (calc[i] === "*") {
        calc[i] = parseInt(calc[i - 1]) * parseInt(calc[i + 1]);
        calc[i] = calc[i].toString();
        calc.splice(i - 1, 1);
        calc.splice(i, 1);
      } else if (calc[i] === "÷") {
        calc[i] = parseInt(calc[i - 1]) / parseInt(calc[i + 1]);
        calc[i] = calc[i].toString();
        calc.splice(i - 1, 1);
        calc.splice(i, 1);
      }
    }
  }
  
  panel.innerHTML = calc[0];
  inputs = [calc[0]];
  console.log(calc);
  console.log(inputs);
  calc = [""];
}

function clearInputs() {
  panel.innerHTML = "";
  calc = [""];
  inputs = [];
}

// make constant functions like this
const constantSymbols = ["G", "e"]
const constantValues = [6.67E-11, 2.71828]
function constant(name) {
  var ind = constantSymbols.indexOf(name);
  inputs.push(constantValues[ind]);
  panel.innerHTML += name;
}
