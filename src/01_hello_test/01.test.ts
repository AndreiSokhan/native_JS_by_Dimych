import {multiplay, splitIntoWords, sum} from "./01";

//data
let a: number;
let b: number;
let c: number;

beforeEach(() => {
   a = 1;
   b = 2;
   c = 3;
})

test.skip('sum should be correct', () => {

   //action
   const result1 = sum(a, b);
   const result2 = sum(a, c);
//   expect result
   expect(result1).toBe(3)
   expect(result2).toBe(4)
})

test.skip('multiplay should be correct', () => {

   //action
   const result1 = multiplay(a, b);
   const result2 = multiplay(b, c);
//   expect result
   expect(result1).toBe(2)
   expect(result2).toBe(6)
})

test.skip('divide should be correct', () => {

   //action
   const result1 = multiplay(b, a);
   const result2 = multiplay(c, a);
//   expect result
   expect(result1).toBe(2)
   expect(result2).toBe(3)
})

function splitIntoWordsiplay(sent1: string) {
}

test.skip("splitIntoWords into words should be correct", () => {
   //data
   const sent1 = "Hello my friends!"
   const sent2 = "JS is a programming language!"
   //action
   const result1 = splitIntoWords(sent1);
   const result2 = splitIntoWords(sent2);
//   expect result
   expect(result1.length).toBe(3)
   expect(result1[0]).toBe("hello")
   expect(result1[1]).toBe("my")
   expect(result1[2]).toBe("friends")

   expect(result2.length).toBe(5)
   expect(result2[0]).toBe("js")
   expect(result2[1]).toBe("is")
   expect(result2[2]).toBe("a")
   expect(result2[3]).toBe("programming")
   expect(result2[4]).toBe("language")
})