// gonna make it in order so it's easier tbh
const answers_ordered = [
  {pict: "washington.jpeg",
  name: ["George Washington"]},
  {pict: "adams.jpeg",
  name: ["John Adams"]
  },
  {pict: "jefferson.jpeg",
  name: ["Thomas Jefferson"]},
  {pict: "madison.jpeg",
  name: ["James Madison"]},
  {pict: "monroe.jpeg",
  name: ["James Monroe"]},
  {pict: "q_adams.jpeg", 
  name: ["John Quincy Adams"]},
  {pict: "jackson.jpeg",
  name: ["Andrew Jackson"]},
  {pict: "vanburen.jpeg",
  name: ["Martin Van Buren"]},
  {pict: "w_harrison.jpeg",
  name: ["William Henry Harrison"]},
  {pict: "tyler.jpeg",
  name: ["John Tyler"]},
  {pict: "polk.jpeg",
  name: ["James K. Polk"]},
  {pict: "taylor.jpeg",
  name: ["Zachary Taylor"]},
  {pict: "fillmore.jpeg",
  name: ["Millard Fillmore"]},
  {pict: "pierce.jpeg",
  name: ["Franklin Pierce"]},
  {pict: "buchanan.jpeg",
    name: ["James Buchanan"]},
  {pict: "lincoln.jpeg",
    name: ["Abraham Lincoln"]},
  {pict: "johnson.jpeg",
    name: ["Andrew Johnson"]},
  {pict: "grant.jpeg",
    name: ["Ulysses S. Grant", "Ulysses Grant"]},
  {pict: "hayes.jpeg",
    name: ["Rutherford B. Hayes", "Rutherford Hayes"]},
  {pict: "garfield.jpeg",
    name: ["James A. Garfield", "James Garfield"]},
  {pict: "arthur.jpeg",
    name: ["Chester A. Arthur", "Chester Arthur"]},
  {pict: "cleveland.jpeg",
    name: ["Grover Cleveland"]},
  {pict: "b_harrison.jpeg",
    name: ["Benjamin Harrison"]},
  {pict: "mckinley.jpeg",
    name: ["William McKinley", "William Mckinley"]},
  {pict: "t_roosevelt.jpeg",
    name: ["Theodore Roosevelt", "Teddy Roosevelt"]}
]

let currItr = 0;
let score = 0;

function shuffle(sourceArray) {
    for (let i = 0; i < sourceArray.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (sourceArray.length - i));

        let temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

let answers = shuffle(answers_ordered);



function loadQuestion() {
  // const test_pic = document.getElementById("testing-div");
  // test_pic.textContent = "Sanity check: " + answers[currItr].name;
  // maybe this should be async or something so that the pic and text load simultaneously
  document.getElementById("testing-div").innerHTML = "";
  document.getElementById("imageid").src="presidents/" + answers[currItr].pict;
}

loadQuestion();

function nextQuestion() {
  if (currItr < answers.length - 1) {
    currItr += 1;
    loadQuestion();
  } else {
    displayTotalScore();
    // game is over
    
  }
}

function submitAns() {
  const ans = document.getElementById("pres-answer").value;
  if (answers[currItr].name.includes(ans)) {
    document.getElementById("testing-div").innerHTML = "Correct!";
    score += 1;
  } else {
    document.getElementById("testing-div").innerHTML = "Wrong, it is " + answers[currItr].name[0];
  }
  const reset = document.getElementById("pres-answer");
  reset.value = "";
  displayCurrScore();
  nextQuestion();
}

function displayTotalScore() {
  const tx = document.getElementById("testing-div");
  tx.textContent = "Congratulations, you scored " + displayCurrScore();
}

function displayCurrScore() {
  const scoreStr = score + "/" + (currItr + 1);
  document.getElementById("curr-score").innerHTML = scoreStr;
}

function skipQues() {
  displayCurrScore();
  nextQuestion();
}