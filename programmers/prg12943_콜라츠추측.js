function solution(n) {
    if (n === 1) return 0;
    count = 0;
    while (n !== 1 && count !== 500) {
        n = (n % 2 === 0) ? n / 2 : n * 3 + 1;
        count++;
    }
    return count === 500 ? -1 : count;
}

// 다른 사람의 풀이
// 1)
// function collatz(num) {
//     var answer = 0;
//     while (num != 1 && answer != 500) {
//         num % 2 == 0 ? num = num / 2 : num = num * 3 + 1;
//         answer++;
//     }
//     return num == 1 ? answer : -1;
// }

// 2)
// function collatz(num, count = 0) {
//     return (num == 1) ? ((count >= 500) ? -1 : count) : collatz((num % 2 == 0) ? num / 2 : (num * 3) + 1, ++count);
// }

// 3)
// const solution = (num) => collatzGuessCount(num, 0);

// const collatzGuessCount = (num, acc) =>
//     (num === 1) ? ((acc > 500) ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);

// const processCollatz = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);