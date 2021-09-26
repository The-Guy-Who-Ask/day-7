// Iterate 0 to 10 using for loop, do the same using while and do while loop
for(i=0;i<=10;i++){
console.log(i)
}
//  Iterate 10 to 0 using for loop, do the same using while and do while loop
for(i=10;i>=0;i--){
    console.log(i)
}

// Iterate 0 to n using for loop 
let n = prompt('Enter a number to get its\' print till 0')
for(i=0;i<=n;i++){
    console.log(i)
}

//Use for loop to iterate from 0 to 100 and print only even numbers
for(i=2;i<=100;i+=2){
    console.log(i)
}

// Use for loop to iterate from 0 to 100 and print only odd numbers 
for(i=1;i<=100;i+=2){
    console.log(i)
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
/*for(i=0;i<=100;i++){
    console.log(i)
    if(i/2||i/3||i/5||i/7||i/11){
        i%=1
    }
}*/

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum =1
for(i=1;i<=100;i++){
    sum+=i
}
console.log(sum-1)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//for even
let even=0
for(i=2;i<=100;i+=2){
    even+=i
}
console.log(even)
//for odd
odd=0
for(i=1;i<=100;i+=2){
    odd+=i
}
console.log(odd)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let arr = [odd, even]
console.log(arr)

//Use loop to print the following pattern:
/* 0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100*/
for(i=1;i<=10;i++)
console.log(`${i} X ${i} = ${i*i}`)

// Develop a small script which generate array of 5 random numbers

//Using the above countries array, create the following new array. ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "INDIA", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let new_arr = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "INDIA", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// Using the above countries array, create an array for countries length'.
/*let a =new_arr.values()
b = a.next().value
for(let i =0; i<new_arr.length;i++){
if(i==new_arr[i].length)
console.log(i.length)
}*/

//