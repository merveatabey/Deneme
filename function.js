
for(let index = 1; index<=10; index+= 1){
    console.log(index); 
}

/////////////////////////////////////////////////////////

function compareNumber(firstNumber, secondNumber){
    if(firstNumber > secondNumber){
        console.log(firstNumber + "is greater than" + secondNumber);
    } else if(firstNumber < secondNumber){
        console.log(firstNumber + "is less than" + secondNumber);
    } else{
        console.log("Both the numbers are equal");
        console.log("this is another statement");
    }
}
compareNumber(8,7);     //karşılaştırılacak sayıları fonksiyonun dışında yazıyoruz.
///////////////////////////////////////////////////////////

function print(){
    console.log("this is the printed in the console");
}
print();

/////////////////////////////////////////////////////////////

const add = function(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
const result = add(25,97);
console.log(result);

const subtract = function(firstNumber,secondNumber){
    return firstNumber -secondNumber;
}

console.log(subtract(26,13)); 
///////////////////////////////////////////////////////////////
//fonksiyon bir değişkene atanmadan doğrudan kullanılır.
function sumArrayValues(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
let numbers = [1,2,3,4,5];
console.log(sumArrayValues(numbers));
//////////////////////////////////////////////////////////////
//bir değişkene atanmış anonim fonksiyon. Fonksiyonu başka bir fonksiyon içinde kullanacaksak veya bir değişkenin değeri olarak saklayacaksak kullanışlı olabilir. 
const sayHello = function(name){
    return 'Hello ${name}'
}
console.log(sayHello('Merve'));
//////////////////////////////////////////////////////////////
const person = {
    firstName : "John",
    secondName : "Doe",
    print: function(){
        console.log("this is function property of an object");
    }
};
person.print();