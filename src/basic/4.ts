type First = string;
function showMessage(message: First): void {
  console.log(message);
}

type Second = number;
function calc(num1: Second, num2: Second): Second {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}
