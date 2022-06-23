const array = ['a', 'b', 2, 50, [true, true, false], {'chave': 'valor'}, [1, [2, "c"]]]
// const array = 'oi'
const strings = []
const numbers = []
const Booleans = []
const objects = []

function separaArrays(array) {
    for(i=0;i<array.length;i++){
        switch (typeof array[i]) {
            case 'string':
                strings.push(array[i])
            break;
            
            case 'number':
                numbers.push(array[i])
            break;

            case 'object':
                if(Array.isArray(array[i])){
                 for(j=0;j<array[i].length;j++){
                  array.push(array[i][j])}
                }else{
                    objects.push(array[i]) 
                }
            break;

            case 'boolean':
                Booleans.push(array[i])
            break;
        }
    }
}
separaArrays(array)

console.log(strings);
console.log(numbers);
console.log(Booleans);
console.log(objects);