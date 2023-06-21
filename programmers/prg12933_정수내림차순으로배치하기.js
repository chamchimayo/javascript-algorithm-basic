function solution(n) {
    var answer = Array.from(n + "").sort((a, b) => b - a).join("") * 1;
    return answer
}

// 다른 사람의 풀이
// function solution(n) {
//     const newN = n + "";
//     const newArr = newN
//         .split("")
//         .sort()
//         .reverse()
//         .join("");

//     return +newArr;
// }