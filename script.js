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
    name: ["Theodore Roosevelt", "Teddy Roosevelt"]},
  {pict: "taft.jpeg",
    name: ["William Howard Taft", "William Taft"]},
  {pict: "wilson.jpeg",
    name: ["Woodrow Wilson"]},
  {pict: "harding.jpeg",
    name: ["Warren G. Harding", "Warren Harding"]},
  {pict: "coolidge.jpeg",
    name: ["Calvin Coolidge"]},
  {pict: "hoover.jpeg",
    name: ["Herbert Hoover"]},
  {pict: "f_roosevelt.jpeg",
    name: ["Franklin D. Roosevelt", "Franklin Roosevelt", "Franklin Delano Roosevelt", "FDR"]},
  {pict: "truman.jpeg",
    name: ["Harry S. Truman", "Harry Truman"]},
  {pict: "eisenhower.jpeg",
    name: ["Dwight D. Eisenhower", "Dwight Eisenhower"]},
  {pict: "kennedy.jpeg",
    name: ["John F. Kennedy", "John Kennedy", "John Fitzgerald Kennedy", "JFK"]},
  {pict: "l_johnson.jpeg",
    name: ["Lyndon B. Johnson", "Lyndon Johnson", "Lyndon Baines Johnson", "LBJ"]},
  {pict: "nixon.jpeg",
    name: ["Richard Nixon"]},
  {pict: "ford.jpeg",
    name: ["Gerald Ford"]},
  {pict: "carter.jpeg",
    name: ["Jimmy Carter", "James Carter"]},
  {pict: "reagan.jpeg",
    name: ["Ronald Reagan"]},
  {pict: "hw_bush.jpeg",
    name: ["George H. W. Bush", "George Bush"]},
  {pict: "clinton.jpeg",
    name: ["Bill Clinton", "William Clinton"]},
  {pict: "bush.jpeg",
    name: ["George W. Bush", "George Bush"]},
  {pict: "obama.jpeg",
    name: ["Barack Obama"]},
  {pict: "trump.jpeg",
    name: ["Donald Trump", "Donald J. Trump"]},
  {pict: "biden.jpeg",
    name: ["Joe Biden", "Joseph Biden"]}
]

let currItr = 0;
let score = 0;
let name = "";

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
  console.log(currItr);
  const next = document.getElementById('btt-2');
  next.style.display = 'none';
  const submit = document.getElementById('btt-1');
  submit.style.display = 'block';
  document.getElementById("testing-div").innerHTML = "";
  document.getElementById("imageid").src="pres_img/" + answers[currItr].pict;
  console.log(answers[currItr].name[0]);
  const reset = document.getElementById("pres-answer");
  reset.value = "";
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
    // document.getElementById("testing-div").innerHTML = "Correct!";
    score += 1;
    correctAnswer();
  } else {
    wrongAnswer();
  }
  displayCurrScore();
  // nextQuestion();
}

function displayTotalScore() {
  const tx = "Congratulations, you scored " + score + " out of 45";
  document.getElementById("testing-div").innerHTML = tx;
  const enterName = document.getElementById("btt-3");
  const next = document.getElementById("btt-2");
  enterName.style.display = "block";
  next.style.display = "none";
}

function submitScore() {
  name = document.getElementById("pres-answer").value;
  // now...to pass this into a different javascript file...
  
}

function displayCurrScore() {
  const scoreStr = score + "/" + (currItr + 1);
  document.getElementById("curr-score").innerHTML = scoreStr;
}

function skipQues() {
  displayCurrScore();
  nextQuestion();
}


function correctAnswer() {
  const submit = document.getElementById('btt-1');
  const next = document.getElementById('btt-2');
  submit.style.display = "none";
  next.style.display = "block";
  document.getElementById("testing-div").innerHTML = "Correct!";
}

function wrongAnswer() {
  const submit = document.getElementById('btt-1');
  const next = document.getElementById('btt-2');
  submit.style.display = "none";
  next.style.display = "block";
  const ans = answers[currItr].name[0];
  document.getElementById("testing-div").innerHTML = "The correct answer is " + ans; 
}

// export { name, score };