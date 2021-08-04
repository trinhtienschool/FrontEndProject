"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello World');
var json = require("./search.json");
var i = 1;
for (var _i = 0, _a = Object.keys(json); _i < _a.length; _i++) {
    var key = _a[_i];
    for (var _b = 0, _c = json[key]; _b < _c.length; _b++) {
        var object = _c[_b];
        object.product_id = i;
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
