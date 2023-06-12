function solution(s) {
    return (s.match(/p/ig) || []).length == (s.match(/y/ig) || []).length
}

// 다른 사람의 풀이
// function solution(s) {
//     return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// }

// function solution(s) {
//     let a = [...s.toLowerCase()].reduce((acc, cur) => {
//         if (cur === 'p') return acc + 1;
//         else if (cur === 'y') return acc - 1;
//         return acc;
//     }, 0) ? false : true;
//     return
// }
