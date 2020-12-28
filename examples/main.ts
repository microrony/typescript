const button = document.querySelector('button');
let input1 = document.getElementById('num1')! as HTMLInputElement;
let input2 = document.getElementById('num2')! as HTMLInputElement;

const add = (num1: number, num2: number) => {
  return num1 + num2
}

const sum = () => {
  console.log(add(+input1.value, +input2.value))
}

button.addEventListener('click', sum);