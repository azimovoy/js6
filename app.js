let btn = document.querySelectorAll('button');
let btnTwo = document.querySelectorAll('.button');
let body = document.querySelector('body');
let block = document.querySelectorAll('.block');

btn.forEach((item,i) =>{
   item.addEventListener('click', () =>{

      if (i == 0) {
         body.style.background = 'red'
      }else if (i == 1) {
         body.style.background = 'blue'
      }else if (i == 2) {
         body.style.background = 'green'
      }else if (i == 3) {
         body.style.background = 'yellow'
      }else if (i == 4){
         body.style.background = 'white'
      }
      })
   })
   
   btnTwo.forEach((el,x) =>{
      el.addEventListener('click', () =>{
        block.forEach((block) => {
         if (x == 0) {
            block.style.background = 'red'
         }else if (x == 1) {
            block.style.background = 'blue'
         }else if (x == 2) {
            block.style.background = 'green'
         }else if (x == 3) {
            block.style.background = 'yellow'
         }else if(x == 4) {
            block.style.background = 'white'
         }
         });
      
         })
      })
      




