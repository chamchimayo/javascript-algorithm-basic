function solution(players, callings) {
  let ranking = {};
  players.forEach((element, index) => {
    ranking[element] = index;
  });
  callings.forEach((winner) => {
    let num = ranking[winner];
    let loser = players[num - 1];
    players[num - 1] = winner;
    players[num] = loser;
    ranking[winner]--;
    ranking[players[num]]++;
  });
  return players;
}

players = ["mumu", "soe", "poe", "kai", "mine"];
callings = ["kai", "kai", "mine", "mine"];
console.log(solution(players, callings));
