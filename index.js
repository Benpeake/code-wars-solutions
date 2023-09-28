//Who likes it?
function likes(names) {
  
  let statement = ''
  
  if(names.length<1){
    statement = 'no one likes this'
  }
  
  if(names.length == 1){
    statement = `${names[0]} likes this`
  }
  
  if (names.length == 2) {
    statement = `${names[0]} and ${names[1]} like this`
    }
  
  if(names.length ==3) {
     statement = `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  
  if(names.length >= 4) {
     statement = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
  
  return statement
}


//Multiples of 3 or 5
function solution(number){
  
  if (number <= 0){
    return 0
  }
  
  let multiplesOf3And5 = []
  let total = 0
  
  for(let i=0; i<number; i++) {
     if(i % 3 == 0 || i % 5 == 0){
      multiplesOf3And5.push(i)
    }
  }
  
  multiplesOf3And5.forEach((number) =>{
    total += number
  })
  
  return total
  
}


//Disemvowel Trolls
function disemvowel(str) {
  
  let vowles = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'] 
  let strArr = str.split('')
  let noVowels = []
  
  strArr.forEach((letter) => {
    if (!vowles.includes(letter)) {
      noVowels.push(letter);
    }
  });

  return noVowels.join('');
  
}


//Sum of positive
function positiveSum(arr) {
  
  let positiveNum = []
  let positiveNumSum = 0
  
arr.forEach((num) =>{
  if(num > 0){
    positiveNum.push(num)
  }
})
  
  positiveNum.forEach((num)=> {
    positiveNumSum += num
    
  })
  
  return positiveNumSum
    
}


//Descending Order
function descendingOrder(n){
  const digitArray = Array.from(String(n));
  const sortedArray = digitArray.sort((a, b) => b - a);
  const result = parseInt(sortedArray.join(''), 10);
  return result;
}


//Convert a String to a Number!
const stringToNumber = function(str){

  return parseFloat(str)
}


//Remove First and Last Character
function removeChar(str){
 
  if(str.length<3){
    return ""
  }
  
  let array = str.split('')
  array.shift()
  array.pop()
  return array.join('')
  
};


//Mumbling
function accum(s) {
	// 
  let arrayOfLetters = s.toLowerCase().split("")
  let accumArray = []
  
  for(let i = 0; i < arrayOfLetters.length; i++){
    let letterPattern = arrayOfLetters[i].repeat(i+1)
    letterPattern = letterPattern.charAt(0).toUpperCase() + letterPattern.slice(1)
    console.log(letterPattern)
    accumArray.push(letterPattern)
  }
  
  const awnser = accumArray.join('-')
  
  return awnser
  
}


//A Needle in the Haystack
function findNeedle(haystack) {
  
  const index = haystack.indexOf("needle")
  return "found the needle at position " + index
  
    }


//Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  
  if (bool == true){
    return 'Yes'
  } else if (bool == false){
    return 'No'
  }
  
}


//Replace With Alphabet Position
function alphabetPosition(text) {
  
const alphabet={
    a:1,  b:2,  c:3,
    d:4,  e:5,  f:6,
    g:7,  h:8,  i:9,
    j:10, k:11, l:12,
    m:13, n:14, o:15,
    p:16, q:17, r:18,
    s:19, t:20, u:21,
    v:22, w:23, x:24,
    y:25,  z:26
}

let alphabetPositionConversion = []

let pureText = text.replace(/[^a-zA-Z]/g, "")

console.log(pureText)
  
let lettersArray= pureText.toLowerCase().split("")

lettersArray.forEach((letter) =>{
    alphabetPositionConversion.push(alphabet[letter])  
})

let string = alphabetPositionConversion.join(" ")

return string.trim()
   
}


//Multiplication table
multiplicationTable = function(size) {
  
  const table = []
  
  for(let i=1; i<=size; i++){
    const row = []
    for (let j=1; j<=size; j++){
      row.push(i*j)
    }
    table.push(row)
  }
  
  return table
  
}


//Highest Scoring Word
function high(str){
  
  const scoringIndex={
    a:1,  b:2,  c:3,
    d:4,  e:5,  f:6,
    g:7,  h:8,  i:9,
    j:10, k:11, l:12,
    m:13, n:14, o:15,
    p:16, q:17, r:18,
    s:19, t:20, u:21,
    v:22, w:23, x:24,
    y:25,  z:26
}
  
   let highScore = 0
   let highestScoreingWord = ""
  
   let arrayOfWords = str.split(" ")
   
   arrayOfWords.forEach(word =>{
     
     let wordScore = 0
     
     for(let i=0; i<word.length; i++){
       wordScore += scoringIndex[word.charAt(i)]
       if (wordScore > highScore){
         highScore = wordScore 
         highestScoreingWord = word
       }
     }
   })
  
  return highestScoreingWord
}


//NATO Phonetic Alphabet
function nato(word) {
  
  let letters = word.toLowerCase().split('')
  let natoTranslation = []
  
  letters.forEach(letter => {
    if(letter == 'a'){
      natoTranslation.push('Alpha')
    } else if(letter == 'b'){
      natoTranslation.push('Bravo')
    } else if(letter == 'c'){
      natoTranslation.push('Charlie')
    } else if(letter == 'd'){
      natoTranslation.push('Delta')
    } else if(letter == 'e'){
      natoTranslation.push('Echo')
    } else if(letter == 'f'){
      natoTranslation.push('Foxtrot')
    } else if(letter == 'g'){
      natoTranslation.push('Golf')
    } else if(letter == 'h'){
      natoTranslation.push('Hotel')
    } else if(letter == 'i'){
      natoTranslation.push('India')
    } else if(letter == 'j'){
      natoTranslation.push('Juliett')
    } else if(letter == 'k'){
      natoTranslation.push('Kilo')
    } else if(letter == 'l'){
      natoTranslation.push('Lima')
    } else if(letter == 'm'){
      natoTranslation.push('Mike')
    } else if(letter == 'n'){
      natoTranslation.push('November')
    } else if(letter == 'o'){
      natoTranslation.push('Oscar')
    } else if(letter == 'p'){
      natoTranslation.push('Papa')
    } else if(letter == 'q'){
      natoTranslation.push('Quebec')
    } else if(letter == 'r'){
      natoTranslation.push('Romeo')
    } else if(letter == 's'){
      natoTranslation.push('Sierra')
    } else if(letter == 't'){
      natoTranslation.push('Tango')
    } else if(letter == 'u'){
      natoTranslation.push('Uniform')
    } else if(letter == 'v'){
      natoTranslation.push('Victor')
    } else if(letter == 'w'){
      natoTranslation.push('Whiskey')
    } else if(letter == 'x'){
      natoTranslation.push('X-ray')
    } else if(letter == 'y'){
      natoTranslation.push('Yankee')
    } else if(letter == 'z'){
      natoTranslation.push('Zulu')
    }
  })
  
  return natoTranslation.join(' ')
  
}


//Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    
    let ascending = args.sort((a,b) => {return a-b})
    
    return ascending[0]
    
  }
}


//Even or Odd
function evenOrOdd(number) {
  
  if (number % 2 === 0 || number === 0){
    return 'Even'
  } else {
    return 'Odd'
  }
  
}


//Array.diff
function arrayDiff(a, b) {
  
return a.filter((val) => !b.includes(val));
  
}


//Sum of odd numbers
function rowSumOddNumbers(n) {
  
return n * n * n
  
}

//Selective fear of numbers
var AmIAfraid = function(day, num){
  
    if (day == 'Monday' && num == 12 ||
        day == 'Tuesday' && num > 95 ||
        day == 'Wednesday' && num == 34 ||
        day == 'Thursday' && num == 0 ||
        day == 'Friday' && num % 2 == 0 ||
        day == 'Saturday' && num == 56 ||
        day == 'Sunday' &&  num == 666 ||
        day == 'Sunday' &&  num == -666
        )
    {return true}
    else {return false}
  
}
