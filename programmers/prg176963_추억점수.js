function solution(name, yearning, photo) {
  name.forEach((element, index) => {
    name[element] = yearning[index];
  });

  let answer = [];
  photo.map((array, i) => {
    let sum = 0;
    array.map((a) => {
      sum += Object.keys(name).includes(a) ? name[a] : 0;
    });
    answer.push(sum);
  });
  return answer;
}

let name = ["may", "kein", "kain", "radi"];
let yearning = [5, 10, 1, 3];
let photo = [["may"], ["kein", "deny", "may"], ["kon", "coni"]];

console.log(solution(name, yearning, photo));
