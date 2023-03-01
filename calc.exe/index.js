var Memory = 0;
var Ans = 0;
var Number1 = "";
var Number2 = "";
var NewNumber = "blank";
var opvalue = "";
var pi = Math.PI;
var lastnum = "";

function Display(displaynumber) {
  document.calculator.mathinput.value = displaynumber;
}

function DisplayMsg(msg, opts) {
	document.calculator.mathinput.value = msg;
	document.calculator.answer.style = "resize:none; width: 100%; text-align:left;";
	document.calculator.answer.value = opts;
	Ans = 0;
}

function DisplayAns(displaynumber) {
  document.calculator.answer.style = "resize:none; width: 100%; text-align:right;";
  document.calculator.answer.value = displaynumber;
}

function ClearCalc() {
  Number1 = "";
  Number2 = "";
  NewNumber = "blank";
  Display("");
  DisplayAns("");
}

function Backspace(answer) {
  answerlength = answer.length;
  answer = answer.substring(0, answerlength - 1);
  if (Number2 != "") {
    Number2 = answer.toString();
    Display(Number2);
  } else {
    Number1 = answer.toString();
    Display(Number1);
  }
}

function CheckNumber(answer) {
  if (answer == ".") {
    Number = document.calculator.answer.value;
    if (Number.indexOf(".") != -1) {
      answer = "";
    }
  }
  if (NewNumber == "yes") {
    Number2 += answer;
    Display(Number2);
  } else {
    if (NewNumber == "blank") {
      Number1 = answer;
      Number2 = "";
      NewNumber = "no";
    } else {
      Number1 += answer;
    }
    Display(Number1);
    lastnum = Number1;
  }
}
function SqrtButton() {
  Number1 = Math.sqrt(Number1);
  NewNumber = "blank";
  DisplayAns(Number1);
}
function PercentButton() {
  if (NewNumber != "blank") {
    Number1 *= 0.01;
    NewNumber = "blank";
    DisplayAns(Number1);
    CheckNumber("%");
  }
}
function RecipButton() {
  Number1 = 1 / Number1;
  NewNumber = "blank";
  DisplayAns(Number1);
}
function NegateButton() {
  Number1 = parseFloat(-Number1);
  NewNumber = "no";
  DisplayAns(Number1);
}
function EqualButton() {
try {
	if (eval(Number1) === Infinity || eval(Number1) === NaN || eval(Number1) === NaN) {
	  DisplayMsg("Math ERROR", "Press [AC]");
	}
	else{
		DisplayAns(algebra.parse(Number1));
		Ans = algebra.parse(Number1);
		}
} catch(e) {
	if (e instanceof SyntaxError) {
	  DisplayMsg("Syntax ERROR", "Press [AC]");
	}
}
}
function eqnsolver (arg) {
  var eqn = new algebra.Equation(algebra.parse(arg),0)
  if (eqn.solveFor("x") == "") {DisplayMsg("There is no real value for x", "[AC]: Exit");}
  else { var lngth = 0; 
  var output = "";
  while (lngth < eqn.solveFor("x").length) {
    output += "x["+(lngth+1)+"] = "+eqn.solveFor("x")[lngth]+"\n";
    lngth++
  }
  DisplayAns(output)
  }
}

var buttons = document.getElementsByClassName("button");

buttons.onclick = function (e) {
  buttons.style = "box-shadow: 0px 0px 3px rgb(0 0 0 / 30), inset 1px 1px 3px rgb(0 0 0 / 30);"
}