function solution(x) {
    var sum = (x + "").split("").reduce((a, b) => a * 1 + b * 1, 0);
    return x % sum === 0
}

// 다른 사람의 풀이
// function solution(x) {
//     let num = x;
//     let sum = 0;
//     do {
//         sum += x % 10;
//         x = Math.floor(x / 10);
//     } while (x > 0);

//     return !(num % sum);
// }

// function Harshad(n) {
//     return !(n % (n + "").split("").reduce((a, b) => +b + +a));
// }