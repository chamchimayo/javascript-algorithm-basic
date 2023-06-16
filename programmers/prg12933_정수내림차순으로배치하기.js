function solution(n) {
    var answer = Array.from(n).sort((a, b) => b - a)
    return answer
}

let n = 118372
console.log(solution(n))