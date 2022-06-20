function ale(num1, num2){
    let quociente = num1/num2
    let modulo = num1%num2
    return [quociente, modulo, parimpar(quociente)]
}

function parimpar (quociente){
    if(quociente%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

let resultado = ale(5, 2)
console.log(resultado)

const array =[1,2,7,33,1491]

const array2 = []

for(let num = 0; num < array.length; num++){
    array2.push({
        "numero": array[num],
        "tipo": parimpar(array[num])
    })
}
console.log(array2);