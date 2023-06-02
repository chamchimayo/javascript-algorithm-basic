function solution(x, n) {
    let answer = [];
    let num = x;
    for (let i = 0; i < n; i++) {
        answer.push(num);
        num += x;
    }
    return answer;
}

// 다른 사람의 풀이
function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x * i)
    }
    return answer;
}

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}