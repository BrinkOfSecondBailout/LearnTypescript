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
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var person = {
    name: "Max",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: ADMIN
};
if (person.role === ADMIN) {
    console.log('is admin');
}
// person.role.push('admin');
// person.role[1] = 'admin';
// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];
// console.log(person);
// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase())
// }
