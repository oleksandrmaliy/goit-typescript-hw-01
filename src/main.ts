import './style.css';

// // src/main.ts

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(add(1, 2));

// type User = {
//   name: string;
//   age: number;
// };

// let user: User = {
//   name: 'Tom',
//   age: 10,
// };

// let userJack: User = {
//   name: 'Jack',
//   age: 25,
// };

// export { user, userJack };

// let arrString: string[];

// arrString = ['Text', 1];

// export {};

// let arrNumber: number[];

// arrNumber = [1, 'Text'];

// export {};

// enum Role {
//   ADMIN,
//   USER,
// }

// const person = {
//   role: Role.ADMIN,
// };

// if (person.role === Role.ADMIN) {
//   console.log('Role: ', Role.ADMIN);
// }

// type Person = {
//   name: string;
// };

// type AdditionFields = {
//   age: number;
// };

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const merged = merge<Person, AdditionFields>({ name: 'Alisa' }, { age: 28 });

// merged.name;

// export {};

console.log('ts' + '   ' + 10000);
const callback = (a: number): number => {
  return 100 + a;
};

console.log(callback(200));
