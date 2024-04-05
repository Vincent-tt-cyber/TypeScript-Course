const numbers = [1, 2, 3, 4, 5, true, "hello"];

const strs1: string[] = [];
const strs2: Array<string> = [];

strs1.push("arr1");

interface ICar {
  wheels: number;
  brand: string;
}

const cars: ICar[] = [];

cars.push({ wheels: 5, brand: "Audi", type: "" });

const arrOfArr: string[][] = [];

arrOfArr.push([""]);

function printArr(array: unknown):void {}
