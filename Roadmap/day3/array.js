numbers = [1, 2, 3, 4, 5];
//console.log(numbers);
numbers.push(6, 7, 8, 9, 10, 11);
count=numbers.unshift(0);
//console.log(numbers);
//console.log(`total=${count}`);
numbers.shift();
//console.log(numbers);

numbers.splice(6, 0, 6.5);
deleted_value=numbers.splice(6, 2, 7.5);
console.log(numbers,
    `${deleted_value}`);
