


/*

1.- Crear una función que encuentre el número más repetido en un array.
Ejemplo Input -> [3,6,1,8,2,3,6,3,2,5,6]
Salida -> 6
*/
console.log('-----------')
console.log('Ejercicio 1')
console.log('-----------')


function BuscarMasRepetido(array){

    const cuenta = {};
    let MasRepetido;
    let MaxRepetidos = 0;

    for (i = 0; i < array.length; i ++){
        const num = array[i];
        
        if (cuenta[num] === undefined){
            cuenta[num] = 1;

        }else{
            cuenta[num] ++;
        }

        //----
        if (cuenta[num] > MaxRepetidos){
            MaxRepetidos = cuenta[num];
            MasRepetido = num;

        }
      
    }

    return MasRepetido;
}

const Nums = [3,6,1,8,2,3,6,3,2,5,6,6];
let repetidos = BuscarMasRepetido(Nums);

console.log(`el numero mas repetido es el ${repetidos}`)




////////
console.log('-----------')
console.log('Ejercicio 2')
console.log('-----------')



