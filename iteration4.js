


bugs=['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

text='Salamandra';

function findArrayIndex(array,text){
    for (let i = 0; i < array.length; i++) {
        if (array[i]===text) {
            return i;
        }
        
    }
}
console.log(findArrayIndex(bugs,text));