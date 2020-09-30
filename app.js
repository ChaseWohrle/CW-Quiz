/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  problems: [
    {
      question: 'What color is broccoli?',
      answers: [
        'Red',
        'Orange',
        'Pink',
        'Green'
      ],
      correctAnswer: 'Green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2020',
        '2005'
      ],
      correctAnswer: '2020'
    },
    {
      question: 'When is the morning?',
      answers: [
        'Dawn',
        'Noon',
        'Dusk',
        'Midnight'
      ],
      correctAnswer: 'Dawn'
    },
    {
      question: 'Where is Italy located?',
      answers: [
        'North America',
        'South America',
        'Europe',
        'Asia'
      ],
      correctAnswer: 'Europe'
    },
    {
      question: 'How many wheels does a car have?',
      answers: [
        '1',
        '2',
        '3',
        '4'
      ],
      correctAnswer: '4'
    }
  ]

};

/* counter to iterate through questions, providing a problem object  */
let currentProblem = 0;
let correctScores = 0;
let incorrectScores = 0;
let isQuizComplete = false;
/********** TEMPLATE FUNCTION(S) **********/

function createChoiceHtml(choice) {
  return `<div>`+
    `<input type="radio" value="${choice}" id="${choice}" name="radio">` +
    `<label for="${choice}"> ${choice}</label>` +
    `</div>`;
}

function createChoicesHtml(answers) {
  const choiceGroup = '<form>' +
    answers.map(createChoiceHtml).join('') +  
    '<button type="submit" name="submit" onclick="clickSubmit()">Submit</button>' +
    '<button name="reset" onclick="clickReset()">Reset</button>' +
    '</form>';
  return choiceGroup;
}


/********** RENDER FUNCTION(S) **********/

function renderProblem() {
  // access data
  const problem = store.problems[currentProblem];
  if ( currentProblem < 1) {
    alert('Click to begin');
  }
  if ( currentProblem < store.problems.length ) {
  // generate templates
   const choices = createChoicesHtml(problem.answers);
  // display templates
    $('.current-question').text(`Question #${currentProblem + 1} out of ${store.problems.length}`);
    $('.current-score').text(`Correct: ${correctScores} , Incorrect: ${incorrectScores}`);
    $('.js-question').text(problem.question);
    $('.js-choices').html(choices);
  }
  else {
    $('.current-score').text(`Correct: ${correctScores} , Incorrect: ${incorrectScores}`);
    alert(`${correctScores}/${currentProblem} correct`);
    isQuizComplete = true;
  }  
}


/********** EVENT HANDLER FUNCTION(S) **********/

function clickSubmit() {
  if (isQuizComplete === false) {
    gradeResponse();
  }
  else {
    alert('Click Reset to start a new quiz');
  }
};

function clickReset() {
  isQuizComplete = false;
  currentProblem = 0;
  correctScores = 0;
  incorrectScores = 0;
  renderProblem();
}; 

/********** MAIN **********/
function main() {
  renderProblem();
}

function gradeResponse() {
  let correctAns = store.problems[currentProblem].correctAnswer;
  let radioElm = document.querySelector('input[name="radio"]:checked');
  if ( radioElm != null) {
    let inputAns = radioElm.value;
      ++currentProblem;
    if (inputAns === correctAns) {
      ++correctScores
      alert('Correct');
    }
    else {
      ++incorrectScores
      alert(`Incorrect; correct answer is ${correctAns}`);
    } 
    renderProblem();
  }
  else {
    alert('Answer Required')
  };
}





$(main); 

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *9
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)