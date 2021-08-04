console.log('Hello World');
import json = require('./search.js');
let i = 1;
for(let key of Object.keys(json)){
  
   for(let object of json[key]){

    object.product_id=i;
    i++;


   }
}
console.log(i);
// for(let key of Object.keys(json)){
  
//     for(let object of json[key]){
 
//     console.log(object);
 
 
//     }
//  }

// for(let object of json.mohinhxe){
//    object.product_id = i+"";
//    i++;
// }
// console.log("");
// console.log("-------------------------------------------------------");
// console.log("");
// for(let object of json.mohinhxe){
//    console.log(JSON.stringify(object));
//    console.log(",");
// }
console.log(i);