const pilots = ['Senna', 'Schumacher', 'Prost', 'Hamilton'];

console.log(pilots[3]); //Hamilton

console.log(pilots.length); //4

//Arrays in Javascript are iterables that means I can use the (for of)
for (let pilot of pilots) {
  console.log(pilot);
}

pilots.push('hummels');
console.log(pilots.length, pilots);

const senna = pilots.find((pilot) => {
  if (pilot === 'Senna') {
    console.log(pilot);
  }
  console.log('not senna');
});

pilots.splice(1, 1);
console.log(pilots);
