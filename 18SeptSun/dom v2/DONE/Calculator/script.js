const input = document.querySelector(".textview");
var expression = "";

function insert(num) {
  expression = expression + "" + num;
  input.value = expression;
}

function equals() {
  expression = Function("return " + expression)();
  input.value = expression;
}

function clean() {
  expression = "";
  input.value = "";
}

function back() {
  if (typeof (expression) === "number") {
    expression = expression + "";
  }
  expression = expression.slice(0, -1);
  input.value = expression;
}