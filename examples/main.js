const button = document.querySelector('button')
let input1 = document.getElementById('num1')
let input2 = document.getElementById('num2')

const add = (num1, num2) => {
  return num1 + num2
}

const sum = () => {
  console.log(add(input1.value, input2.value))
}

button.addEventListener('click', sum);
