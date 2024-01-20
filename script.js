// script file

let a = document.getElementById("cal");
function display(num) {
  a.value += num;
}
function calculator() {
  try {
    a.value = eval(a.value);
  } catch (error) {
    alert("Invalid");
  }
}
function clear2() {
  a.value = '';
}
function del() {
  a.value = a.value.slice(0, -2);
}
