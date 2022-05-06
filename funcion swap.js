console.log("Archivo funcion swap funcionando OK")

// Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.


const fotball = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']



function swap(array,num1,num2){
    const value1=array[num1];
    const value2=array[num2];

    array[num1]=value2;
    array[num2]=value1;

    return array;
}


console.log(fotball);
swap(fotball,1,3);
console.log(fotball);