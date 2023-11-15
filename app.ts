// const person: {
//     name: string;
//     age: number
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: "Max",
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

const person = {
    name: "Max",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: 'READ ONLY USER'
};

// person.role.push('admin');
// person.role[1] = 'admin';

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

// console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}