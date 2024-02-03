// import { name, score } from 'script.js';

let leaderboardData = [
  {name: "-", score: 0},
  {name: "-", score: "0"},
  {name: "-", score: "0"},
  {name: "-", score: "0"},
  {name: "-", score: "0"}
];

// Sort by each player object
function sortData(a, b) {
  if (a.score > b.score) {
    return -1
  }
  if (a.score < b.score) {
    return 1;
  }
  return 0;
}

function displayLeaderboard() {
  leaderboardData.sort(sortData);
  const table = document.getElementById("leaderboard-table");
  const lbSize = 5;
  for (let i = 0; i < lbSize; i++) {
    let row = document.createElement("tr");
    let name = document.createElement("td");
    let score = document.createElement("td");

    name.innerText = leaderboardData[i].name;
    score.innerText = leaderboardData[i].score;

    row.appendChild(name);
    row.appendChild(score);

    table.appendChild(row);
  }
}

displayLeaderboard();