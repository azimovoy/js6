let mass = [
    
]

for (let i = 0; i < Infinity; i++){
let comand = prompt('Введите команду add, del, stop'),
 arrAdd = comand.split(' ')
 if(arrAdd[0]== 'add'){
    mass.push(arrAdd[1])
 } else if (arrAdd[0]== 'del') {
    for (let x = 0; x < mass.length; x++) {
       mass[x] == arrAdd[1] ? mass.splice(x,1) : ''
        
    }
 }else if(arrAdd[0]== 'stop') {
    break
 }
 console.log(mass);
}

