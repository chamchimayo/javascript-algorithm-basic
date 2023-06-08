function solution(n) {
    const nArray = Array.from(String(n));
    return nArray.reduce((accumulator, currentValue) => accumulator + currentValue * 1, 0)
}

// 다른 사람의 풀이
// function solution(n) {
//     return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
// }

// function solution(n) {
//     var sum = 0;

//     do {
//         sum += n % 10;
//         n = Math.floor(n / 10);
//     } while (n > 0);

//     return sum;
// }