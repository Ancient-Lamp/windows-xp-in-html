
function MemoryClear() {
  Memory = 0;
  document.calculator.mem.value = "";
  DisplayMsg("Memory Cleared", "Press [AC] key")
}

function MemoryRecall(answer) {
  if (NewNumber != "blank") {
    Number2 += answer;
  } else {
    Number1 = answer;
  }
  NewNumber = "blank";
  DisplayAns(answer);
}

function MemoryAdd(answer) {
  Memory = Memory + eval(answer);
  DisplayAns(eval(answer));
  if (Memory === 0) {
    document.calculator.mem.value = "";
    NewNumber = "blank";
  } else {
    document.calculator.mem.value = " M  DEG RAD GRA";
    NewNumber = "blank";
  }
}

function MemoryDelete(answer) {
  Memory = Memory - eval(answer);
  DisplayAns(eval(answer));
  if (Memory === 0) {
    document.calculator.mem.value = "";
    NewNumber = "blank";
  } else {
    document.calculator.mem.value = " M ";
    NewNumber = "blank";
  }
}
