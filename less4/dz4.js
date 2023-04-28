//Task 1
var obj = {
    name: 'Marie',
    age: 21
}

delete obj.name;
console.log(obj);

//Task 2
var names = {
    age: 44,
    dog: false
}

if (typeof names['sam'] !== "undefined") {
    console.log(true);
} else {
    console.log(false);
}

//Task 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (var key in student) {
    console.log(key);
    console.log(student[key]);
}

//Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);

//Task 5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    alex: 664,
    alexandra: 199
};

var itog = 0;

for (var key in salaries) {
    itog = itog + salaries[key];
}

itog = itog / 5;
console.log(itog);

//Task 6
var user = {
    name: 'Petya',
    age: 20,
    isMarried: true,
    family: null,
    address: undefined,
    friend: {
        name: 'Misha'
    }
};

var cloneUserObject = {};

for (var key in user) {
    if (typeof user[key] === 'object' && user[key] !== null) {
        cloneUserObject[key] = {};
        for (var keyInFriend in user[key]) {
            cloneUserObject[key][keyInFriend] = user[key][keyInFriend];
        }
        continue;
    }
    cloneUserObject[key] = user[key];
}

console.log(cloneUserObject);