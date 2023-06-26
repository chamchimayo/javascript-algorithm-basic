function solution(arr, divisor) {
    let answer = arr.filter((element) => element % divisor === 0).sort((a, b) => a - b);
    return answer.length === 0 ? [-1] : answer;
}

// 다른 사람의 풀이
// 1)
// function solution(arr, divisor) {
//     var answer = [];
//     arr.map((o) => {
//         o % divisor === 0 && answer.push(o);
//     })
//     return answer.length ? answer.sort((a, b) => a - b) : [-1];
// }

// 2)
// function solution(arr, divisor) {
//     var _ = arr.filter(e => !(e % divisor));
//     return _[0] ? _.sort(($, _) => $ - _) : [-1];
// }