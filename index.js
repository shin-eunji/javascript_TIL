var sum = 0;

for(var i = 0; i < 20; i++) {
  if((i % 2) && (i % 3)){
    sum += i;
  }
}
console.log(sum);