// const person: {
//     name: string;
//     age: number
// } = {
const person = {
    name: "Max",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

person.role.push('admin');
person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

// console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}