let firstNum
let secondNum
let operand

const add = (num1, num2) => {
    console.log(`${num1 + num2}`)
}
const subtract = (num1, num2) => {
    console.log(`${num1 - num2}`)
}
const multiply = (num1, num2) => {
    console.log(`${num1 * num2}`)
}
const divide = (num1, num2) => {
    console.log(`${num1 / num2}`)
}

const operate = (num1, num2, op) => {
    
    switch(op) {
        case '+':
            add(num1, num2)
            break
        case '-':
            subtract(num1, num2)
            break
        case 'x':
            multiply(num1, num2)
            break
        case '%':
            divide(num1, num2)
            break
    }

}