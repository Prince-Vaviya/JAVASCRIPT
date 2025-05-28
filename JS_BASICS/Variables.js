num = 1;
//It will run successfully

'use strict'
num2 = 1;
//It will raise ReferenceError: num is not defined

let num3 = 0;
var num4 = 1;
const num5 = 2;
//Some ways to declare variables let, const, var

var nums1 = 1;
const nums3 = 3;

function func(){
    let nums2 = 2;
    console.log(nums1);
    console.log(nums2);
    // nums3 = 4;  changing value of const variable is not allowed
}