const user = {
    name : 'Lestrade',
    email : 'lestrade@mail.com',
    password : 'les123',
    age : 21
};

console.log(user);
console.log(user.name);
console.log(user['email']);

user.age = 23;
console.log(user);

user.gender = 'male';
console.log(user);

user.address = 'Lucknow';
console.log(user);;

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand : 'Samsung',
    model : 's24',
    price : 124000,
    colors :['black', 'white', 'blue']
};

console.log(smartphone);

console.log(smartphone.colors[1]);

smartphone.colors[2] = 'red';
console.log(smartphone);

const phonelist = [
    {brand : 'Samsung',
    model : 's24',
    price : 124000,
    colors :['black', 'white', 'blue']},

    {brand : 'Realme',
    model : '14X',
    price : 25000,
    colors :['ivory', 'white']},

    {brand : 'OnePlus',
    model : '11R',
    price : 45000,
    colors :['skyblue', 'black', 'gold']},

    {brand : 'Motorola',
    model : 'G85',
    price : 16000,
    colors :['oceangreen', 'blue', 'crimson']},

    {brand : 'Apple',
    model : 'iphone 17 Pro',
    price : 120000,
    colors :['orange', 'blue', 'black']},

    
]

console.log(phonelist[1].brand);
console.log(phonelist[1].price);
console.log(phonelist[1].colors[1]);











