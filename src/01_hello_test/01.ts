// UNIT TEST's

import retryTimes = jest.retryTimes;

export function sum(a: number, b: number) {
   return a + b;
}

export function multiplay(a: number, b: number) {
   return a * b;
}

export function div (a: number, b: number) {
   return a / b;
}


export function splitIntoWords(sentense: string) {
   return sentense.toLowerCase().split(" ").map(w=>w.replace("!",""));
}