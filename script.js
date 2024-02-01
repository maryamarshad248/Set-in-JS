'use strict';

const orderset = new Set([
  'pizza',
  'pasta',
  'Rissoto',
  'pasta',
  'pizza',
  'pizza',
]);
console.log(orderset);
console.log(orderset.size);
console.log(orderset.has('Rissoto'));
console.log(orderset.has('brownies'));
orderset.add('chocolateCake');
console.log(orderset);
orderset.delete('pizza');
console.log(orderset);
//orderset.clear();
//console.log(orderset);
// strings are also iterable
console.log(new Set('Maryam'));
console.log(new Set('Noman'));

for (const order of orderset) console.log(order);

// example
const staff = ['waiter', 'manager', 'shef', 'waiter', 'sweaper', 'shef'];
const uniqueStaff = new Set(staff);
console.log(uniqueStaff);
// set into array
const family = ['noman', 'maryam', 'ayesha', 'usman'];
const uniqueFamily = [...new Set(family)];
console.log(uniqueFamily);

console.log(new Set(['noman', 'maryam', 'ayesha', 'usman']).size);

console.log(new Set('MaryamArshad').size);
