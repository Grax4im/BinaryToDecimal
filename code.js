const button = document.querySelector('button')
const binary = document.getElementsByName('binary')[0]
const decimal = document.getElementsByName('decimal')[0]

button.onclick = function() {convertBinaryToDecimal() }

function convertBinaryToDecimal() {
    if(isBinary()) {
        let result = 0;
        const binaryValue = binary.value;
        let total = 0;
        for(let i = 0; i < binaryValue.length; i++) {
            result += parseInt(binaryValue[i]) * (Math.pow(2, binaryValue.length-i-1))
        }
        decimal.value = result;
    }
    else {
        alert(binary.value + " não é um numero Binário \n Digite apenas numeros entre 0 e 1");
    }
}

function isBinary() {
    return ([...binary.value].filter(a => !(a == 0 || a == 1))).length == 0
}