// db

type personType = { name: string; age: number; iStudent: boolean };
const person: personType = {
  name: "kobi",
  age: 23,
  iStudent: true,
};
interface book {
  title: string;
  author: string;
  year: number;
}
const bookFile: book = {
  title: "harry potter",
  author: "j.k rollings",
  year: 1997,
};
type reader = {
  name: string;
  age: number;
  iStudent: boolean;
  book: { title: string; author: string; year: number };
};
const personA: reader[] = [
  {
    name: "kobi",
    age: 23,
    iStudent: true,
    book: { title: "harry potter", author: "j.k rollings", year: 1997 },
  },
  {
    name: "david",
    age: 35,
    iStudent: true,
    book: { title: "ring", author: "jack spar", year: 1897 },
  },
  {
    name: "moses",
    age: 42,
    iStudent: true,
    book: { title: "shine", author: "A richie", year: 2011 },
  },
];

// functions

const bigN = (num1: number, num2: number): number => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
const bigNum = (num1: number, num2: number): void => {
  if (num1 > num2) {
    console.log("the bigger num is:" + num1);
  } else {
    console.log("the bigger num is:" + num2);
  }
};
const even_or_odd = (num1: number): string => {
  if (num1 % 2 === 0) {
    return "the num is even";
  } else {
    return "the num is odd";
  }
};
const strLength = (str: string): number => {
  return str.length;
};
const arrayTilNum = (num: number): number[] => {
  let new_arr: number[] = [];
  for (let i = 0; i > num; i++) {
    new_arr.push(i);
  }
  return new_arr;
};
const highFromArray = (array: number[]): number => {
  let high: number = 0;
  array.forEach((item) => {
    if (item > high) {
      high = item;
    }
  });
  return high;
};
const printPerson = (data: personType): void => {
  console.log(`${data.name} ${data.age} ${data.iStudent}`);
};
const isMinor = (data: personType): boolean => {
  if (data.age < 18) {
    return true;
  } else {
    return false;
  }
};
const theOldest = (data: reader[]): string => {
  let oldM: string = " ";
  let oldMN: number = 0;
  let oldB: number = 3000;
  let oldBn: string = " ";
  data.forEach((item) => {
    if (item.age > oldMN) {
      oldM = item.name;
    }
    if (item.book.year < oldB) {
      oldB = item.book.year;
      oldBn = item.book.title;
    }
  });
  return `the oldest reader is ${oldM}, the oldest book is ${oldBn}`;
};
