type numArray = number[];
const myArray: numArray = [1, 2, 3, 4, 5, 6, 7, 8];
const returnNums = (arr: numArray): number => {
  let count: number = 0;
  arr.forEach((item) => {
    if (item % 2 === 0) {
      count += item;
    }
  });
  return count;
};
type objConcept = { width: number; height: number };
const malben: objConcept = { width: 50, height: 30 };
const myFunc = (obj: objConcept): number => {
  return obj.height * obj.width;
};
const filStr: string = "suninus";
const exercise3 = (str: string): boolean | number => {
  for (let i = 0; i < Math.round(str.length / 2); i++) {
    if (str[i] === str[str.length - i]) {
    } else {
      return false;
    }
  }
  return true;
};
type StrArray = string[];
const strArray: StrArray = ["teddy", "moses"];
const exercise4 = (arr: StrArray): StrArray => {
  return arr.map((item) => item[0].toUpperCase() + item.slice(1));
};
console.log(exercise4(strArray));
