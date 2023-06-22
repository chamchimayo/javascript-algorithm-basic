function solution(a, b) {
    if (a === b) return a;
    let array = [a, b];
    let [min, max] = array.sort((a, b) => a - b);
    let answer = 0;
    for (let i = min; i <= max; i++) {
        answer += i;
    }
    return answer;
}

// 다른 사람의 풀이
// function adder(a, b) {
//     var result = 0
//     //함수를 완성하세요
//     return (a + b) * (Math.abs(a - b) + 1) / 2;
// }

// function adder(a, b) {
//     var result = (a < b) ? a : b;
//     while (a != b) {
//         result += (a < b) ? ++a : ++b;
//     }
//     return result;
// }
