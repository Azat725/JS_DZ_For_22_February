// Функция для создания дробей в виде объекта
function Fraction(numeration, denumeration){
    return {numeration, denumeration}
}



// Функция для сложения параметров дробей
function addFraction(frac1, frac2){
    let newNumeration = frac1.numeration * frac2.denumeration + frac2.numeration * frac1.denumeration
    let newDenumeration = frac1.denumeration * frac2.denumeration

    return Fraction(newNumeration, newDenumeration)
}


// Функция для вычитания параметров дробей
function subFraction(frac1, frac2){
    let newNumeration = frac1.numeration * frac2.denumeration - frac2.numeration * frac1.denumeration
    let newDenumeration = frac1.denumeration * frac2.denumeration

    return Fraction(newNumeration, newDenumeration)
}


// Функция для умножения параметров дробей
function mulFraction(frac1, frac2){
    let newNumeration = frac1.numeration * frac2.numeration
    let newDenumeration = frac1.denumeration * frac2.denumeration

    return Fraction(newNumeration, newDenumeration)
}


// Функция для деления параметров дробей
function divFraction(frac1, frac2){
    let newNumeration = frac1.numeration * frac2.denumeration
    let newDenumeration = frac1.denumeration * frac2.numeration

    return Fraction(newNumeration, newDenumeration)
}


// Функция для нахождения наибольшего общего делителя
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}


// Функция для сокращения параметров дробей
function redFraction(frac){
    let commonDivision = gcd(frac.numeration, frac.denumeration);
    let newNumeration = frac.numeration / commonDivision;
    let newDenumeration = frac.denumeration / commonDivision;

    return Fraction(newNumeration, newDenumeration)
}


let firstFraction = (1, 2)
let secondFraction = (1, 3)


let resultSumm = addFraction(firstFraction, secondFraction)
let resultSub = subFraction(firstFraction, secondFraction)
let resultMul = mulFraction(firstFraction, secondFraction)
let resultDiv = divFraction(firstFraction, secondFraction)
let resultRed = redFraction(firstFraction, secondFraction)

console.log(resultSumm)
console.log(resultSub)
console.log(resultMul)
console.log(resultDiv)
console.log(resultRed)