console.log('SYNCHRONUS CALLS');
console.log('🐇 finishes!');
console.log('🐢 finishes!');

console.log('ASYNCHRONUS CALLS');
setTimeout(() => {
  console.log('🐇 finishes!');
}, 1000);
console.log('🐢 finishes!');