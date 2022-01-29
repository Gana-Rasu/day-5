
//in iffe

//Print odd numbers in an array
(function odd_array(array){

    const filtered_array = array.filter((value=>value%2!==0))
    console.log(filtered_array)
    })
([1,2,45,3,4,5,67,6]);


//Convert all the strings to title caps in a string array
(function titleCase(string) {
      var sentence = string.toLowerCase().split(" ")
      for(var i = 0;i<sentence.length;i++){
          sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
      }
      console.log(sentence.join(" "))
   })
  ("title case example");


//Sum of all numbers in an array
  (function foo(array_sum){
    var temp = 0;
    for(var i=0;i<array_sum.length;i++){
        temp = temp + array_sum[i];
    }
    console.log(temp);
})
([2,5,7]);


// Return all the prime numbers in an array
function isPrime(element) {
    for(var i = 2; i < element; i++) {
      if(element % i === 0) {
        return false;
      }
    }
    return element !== 1;
  }
  var array = [1, 5, 17, 25, 30];
  var primes = array.filter(isPrime);  
  console.log(primes);
  var arr1 = [1,2,3];
  var arr2 = [4,5];


//Return median of two sorted arrays of same size
(function median(arr1,arr2){

var sorted_arr1 = arr1.sort();
var sorted_arr2 = arr2.sort();
var array =sorted_arr1.concat(sorted_arr2);


    
    if(array.length%2 === 0){
        
    let half1 = Math.ceil(array.length / 2)  
    
    let firstHalf1 = array.slice(0, half1)
    let secondHalf1 = array.slice(-half1)
    let med1 = firstHalf1[firstHalf1.length-1]
    let med2  = secondHalf1[0]
    let median1 = (med1+med2)/2
    
    console.log(median1)
    }

    else{
        
    let half2 = Math.ceil(array.length / 2);    
    let firstHalf2 = array.slice(0, half2)
    let secondHalf2 = array.slice(-half2)
    let median2 =    secondHalf2[0]   
    
    console.log(median2)
        
    }
})
([1,4,5],[6,8,7])


//Remove duplicates from an array
(function duplicate(array){
    let uniqueChars = [...new Set(array)]  
    console.log(uniqueChars)
  })
  (['A', 'B', 'A', 'C', 'B']) //output not working in browser js, but code is right and working in guvi ide


// Rotate an array by k times
(function rotateArray1(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
      console.log(nums)
})
  ([1,2,3,4,5],2)


//arrow function in same order

var odd_array = (array)=>{

    const filtered_array = array.filter((value=>value%2!==0))
    return filtered_array
    }
console.log(odd_array([1,2,45,3,4,5,67,6]))


var titleCase= (string) =>{
    var sentence = string.toLowerCase().split(" ")
    for(var i = 0;i<sentence.length;i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
    }
    return sentence.join(" ")
 }
console.log(titleCase("title case example"));


var foo = (array_sum)=>{
    var temp = 0;
    for(var i=0;i<array_sum.length;i++){
        temp = temp + array_sum[i];
    }
    return temp
}
console.log(foo([2,5,7]));


var median=(arr1,arr2)=>{

    var sorted_arr1 = arr1.sort();
    var sorted_arr2 = arr2.sort();
    var array =sorted_arr1.concat(sorted_arr2);
    
    
        
        if(array.length%2 === 0){
            
        let half1 = Math.ceil(array.length / 2)  
        
        let firstHalf1 = array.slice(0, half1)
        let secondHalf1 = array.slice(-half1)
        let med1 = firstHalf1[firstHalf1.length-1]
        let med2  = secondHalf1[0]
        let median1 = (med1+med2)/2
        return median1
        }
    
        else{
            
        let half2 = Math.ceil(array.length / 2);    
        let firstHalf2 = array.slice(0, half2)
        let secondHalf2 = array.slice(-half2)
        let median2 =    secondHalf2[0]   
        return median1
        }
    }
    console.log(median([1,4,5],[6,8,7]))


var duplicate=(array)=>{
    let uniqueChars = [...new Set(array)]  
        return uniqueChars
      }
console.log(duplicate(['A', 'B', 'A', 'C', 'B']))

var rotateArray1=(nums, k)=> {

     for (let i = 0; i < k; i++) {
            nums.unshift(nums.pop());
    }
     return nums
    }
 console.log(rotateArray1([1,2,3,4,5],2))