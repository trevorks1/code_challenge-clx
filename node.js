// creating a for loop to loop through 1 - 100
for (var i = 1; i < 101; i++) {
  // giving every multiple of 3 and 5 CLXDTX
  if (i % 15 == 0) console.log('CLXDTX');
  // giving every multiple of 3 CLX
  else if (i % 3 == 0) console.log('CLX');
  // giving every multiple of 5 DTX
  else if (i % 5 == 0) console.log('DTX');
  else console.log(i);
}
