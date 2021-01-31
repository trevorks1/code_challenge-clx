# Code Challenge

## Problem Task

Problem - Return 1 - 100 using node.js, then with every multiple of 3 return CLX and multiples of 5 returning DTC.
Then with multiples of 3 and 5 return CLXDTC

## Solution

// creating a for loop to loop through 1 - 100
for (var i = 1; i < 101; i++) {
// giving every multiple of 3 and 5 CLXDTC
if (i % 15 == 0) console.log('CLXDTC');
// giving every multiple of 3 CLX
else if (i % 3 == 0) console.log('CLX');
// giving every multiple of 5 DTC
else if (i % 5 == 0) console.log('DTC');
else console.log(i);
}

Using a for loop I loop through every index out of 1-101 incrementing up.
Then conditional if and if else statements to apply a log of each return.

EXP: 1
2
CLX
4
DTC
CLX
7
8
CLX
DTC
11
CLX
13
14
CLXDTC
