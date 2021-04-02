
('use strict')

function userArray(number){
  let userArray = [];
   for (let item = 0; item <= number; item ++) {
    }
   let itemToWords = item.toString();
    if(itemToWords.includes(3)) {
      userArray.push("Won't you be my neighbor?");
    } else if (itemToWords.includes(2)) {
      userArray.push("Boop!")
    } else if (itemToWords.includes(1)){
      userArray.push("Beep!")
    } else {
      userArray.push(itemToWords);
    }

    return userArray;
  }
 
