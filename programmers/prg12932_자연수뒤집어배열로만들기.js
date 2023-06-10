function solution(n) {
    let arr = Array.from(n.toString());
    let answer = [];
    arr.forEach(v => answer.unshift(v * 1));
    return answer;
}

// 다른 사람의 풀이
// function solution(n) {
//     // 문자풀이
//     // return (n+"").split("").reverse().map(v => parseInt(v));

//     // 숫자풀이
//     var arr = [];

//     do {
//         arr.push(n % 10);
//         n = Math.floor(n / 10);
//     } while (n > 0);

//     return arr;
// }