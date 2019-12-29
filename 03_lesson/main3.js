'use strict';
//Task 1: Count the number of Duplicates

let word1 = "abcde" 
let word2 = "aabbcde" 
let word3 = "aabBcde"
let word4 = "indivisibility"
let word5 = "ABBA"

function findLetters(word) {
    word = word.toLowerCase();
   let duplicate = [];
   for (let i = 0; i < word.length; i++) {
     if (word.indexOf(word[i])!== i) {
       if (!duplicate.includes(word[i])) {
        duplicate.push(word[i]);
       }
     } 
   }
   return duplicate.length;
  }

const word1Result = findLetters(word1);
console.log(word1Result);

const word2Result = findLetters(word2);
console.log(word2Result);

const word3Result = findLetters(word3);
console.log(word3Result);

const word4Result = findLetters(word4);
console.log(word4Result);

const word5Result = findLetters(word5);
console.log(word5Result);

//Task 3: Shortest Word

let str1 = "bitcoin take over the world maybe who knows perhaps"
let str2 = "turns out random test cases are easier than writing out basic ones"
let str3 = "lets talk about javascript the best language" 
let str4 = "i want to travel the world writing code one day" 
let str5 = "Lets all go on holiday somewhere very cold" 

function findShortWord(str) {
    const strArr = str.split(' ');
    const arrLength = strArr.length;
    let result = 0;

    for (let i = 0; i < arrLength; i++) {
        if (i === 0) {
            result = strArr[i].length;
        }

        if (strArr[i].length < result) {
            result = strArr[i].length;
        }
    }

    return result;
}
const str1Result = findShortWord(str1);
console.log(str1Result);

const str2Result = findShortWord(str2);
console.log(str2Result);

const str3Result = findShortWord(str3);
console.log(str3Result);

const str4Result = findShortWord(str4);
console.log(str4Result);

const str5Result = findShortWord(str5);
console.log(str5Result);
