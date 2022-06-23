const array = ['a', 'b', 2, 50, [true, true, false], {'chave': 'valor'}, [1, [2, "c"]]]
// const array = 'oi'
const strings = []
const numbers = []
const Booleans = []
const objects = []

function separaArrays(array) {
    for(i=0;i<array.length;i++){
        if(typeof array[i] == 'string'){
            strings.push(array[i])
        }else if(typeof array[i] == 'number'){
            numbers.push(array[i])
        }else if (Array.isArray(array[i])){
                for(j=0;j<array[i].length;j++){
                     array.push(array[i][j])}
        }else if (typeof array[i] == 'boolean'){
            Booleans.push(array[i])
        }else if(typeof array[i] == "object"){
            objects.push(array[i])
        }
    }
}
separaArrays(array)


console.log(strings);
console.log(numbers);
console.log(Booleans);
console.log(objects);