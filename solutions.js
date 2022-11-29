"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function isFalse(input){
    return input === false;
}

function concat(input1, input2){
    return input1.toString()+input2.toString();
}
console.log(concat(true,true));


function isTrue(input){
    return input === true;
}

function isEven(input){
    if(typeof input === 'boolean'){
        return false;
    }
    if(input % 2 == 0){
        return true;
    }else {
        return false;
    }
}

function isEqual(input1, input2){
    if(input1 == input2){
        return true;
    }else{
        return false;
    }
}

function not(input){
    return !input;
}

function and(input1,input2){
    return (input1 && input2)}

console.log(and('true', 'false'));

function addOne(input) {
    if (isNaN(input)) {
        return input;
    } else {
        return parseFloat(input) + 1;
    }
}

console.log(addOne('Infinity'));

function isIdentical(input1, input2){
    return input1 === input2;
}

function or(input1,input2){
    return input1||input2;
}