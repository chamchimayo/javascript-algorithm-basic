function solution(n) {
    let answer = 0;
    for (i = 1; i <= n; i++) {
        if (n % i === 0) answer += i;
    }
    return answer;
}

// 다른 사람의 풀이
// function solution(n) {
//     var answer = 0;
//     let i;
//     for (i = 1; i <= Math.sqrt(n); i++) {
//         if (!(n % i)) {
//             answer += (i + n / i);
//         }
//     }
//     i--;
//     return (i === n / i) ? answer - i : answer;
// }