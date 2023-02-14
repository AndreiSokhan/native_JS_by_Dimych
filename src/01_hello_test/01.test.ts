import {mult, splitIntoWords, sum} from './01';

//подготовительная часть (исходные данные)
let a: number;            //const a = 1;
let b: number;            //const b = 2;
let c: number;            //const c = 3;

beforeEach(() => {
   a = 1;
   b = 2;
   c = 3;
})

test('sum should be correct', () => {
   //action (действие)
   const result1 = sum(a, b);
   const result2 = sum(b, c);

   //expected result
   expect(result1).toBe(3);
   expect(result2).toBe(5);
})

test('multiply should be correct', () => {
   //action
   const result1 = mult(a, b);
   const result2 = mult(c, b);

   //expected result
   expect(result1).toBe(2);
   expect(result2).toBe(6);
})

test("splitting into words should be correct", () => {
   //data
   const sent1 = "Hello my friends!"
   const sent2 = "JS - is the best programming language."

   //action
   const result1 = splitIntoWords(sent1);
   const result2 = splitIntoWords(sent2);

   //expected result
   expect(result1.length).toBe(3);
   expect(result1[0]).toBe("hello");
   expect(result1[1]).toBe("my");
   expect(result1[2]).toBe("friends");

   expect(result2.length).toBe(6);
   expect(result2[0]).toBe("js");
   expect(result2[1]).toBe("is");
   expect(result2[2]).toBe("the");
   expect(result2[3]).toBe("best");
   expect(result2[4]).toBe("programming");
   expect(result2[5]).toBe("language");

})