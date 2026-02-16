const myarr =[34, 'hello', true, null, undefined];
console.log(myarr);
console.log(myarr.length);

const movies = ['Toxic', 'ARM', 'Spiderman', 'RedOne', 'RaOne', 'MeanGirls'];

// indexing

console.log(movies[4]);

console.log(movies.indexOf('MeanGirls'));

console.log(movies[-3]);


console.log(movies.at(-3));

movies[1] = 'Vivah';
console.log(movies);

// adding and removing elements
 movies.push('Dangal') // adds element at the end of the array
movies.unshift('3 Idiots'); // adds element at the beginning of the array
console.log(movies);

movies.pop(); // removes element from the end of the array
movies.shift(); // removes element from the beginning of the array
console.log(movies);

// slicing
console.log(movies.slice(1,4));
console.log(movies.slice(1));
console.log(movies.slice(-2));

// splicing
console.log(movies);

// console.log(movies.splice(3,2)); // removes 2 elements starting from index 3
movies.splice(3,2, 'flash', 'superman'); // removes 2 elements starting from index 3 and adds 'flash' and 'superman' at index 3
console.log(movies);










