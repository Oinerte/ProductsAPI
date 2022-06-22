const array = ['ale', 'ana', 2, [true, true]]
const strings = []
const numbers = []
const Booleans = []

for(i=0;i<array.length;i++){
    if(typeof array[i] == 'string'){
        strings.push(array[i])
    }else if(typeof array[i] == 'number'){
        numbers.push(array[i])
    }else if (typeof array[i] == 'object'){
        desmembraArray(array[i])
    }else if (typeof array[i] == 'boolean'){
        Booleans.push(array[i])
    }else {
        console.log('karai');
    }
}

function desmembraArray(object) {
    for(i=0;i<object.length;i++){
        array.push(object[i])
    }
}

console.log(strings);
console.log(numbers);
console.log(Booleans);