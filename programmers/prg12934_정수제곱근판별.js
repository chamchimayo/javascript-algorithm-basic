function solution(n) {
    const root = Math.sqrt(n);
    return Number.isInteger(root) ? (root + 1) * (root + 1) : -1
}

// 다른 사람의 풀이
// function nextSqaure(n) {
//     var result = 0;
//     var x = 0;
//     while (x * x < n) {
//         x++;
//     }
//     if (x * x == n) {
//         x++;
//         result = x * x;
//     } else {
//         result = 'no';
//     }
//     return result;
// }