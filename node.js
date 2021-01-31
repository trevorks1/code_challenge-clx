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
