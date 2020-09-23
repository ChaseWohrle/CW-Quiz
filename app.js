/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  problems: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
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
        'dawn',
        'noon',
        'dusk',
        'midnight'
      ],
      correctAnswer: 'dawn'
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
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/********** TEMPLATE FUNCTION(S) **********/

function createChoiceHtml(choice) {
  return `<div>`+
    `<input type="radio" value="${choice}" id="${choice}">`+
    `<label for="${choice}">${choice}</label>`+
    `</div>`;
}

function createChoicesHtml(answers) {
  return answers.map(createChoiceHtml).join('');
}

/*
  QUIZ FORM 
   <form>
    <h2>store.questions[0].question</h2>
    <input name="answer1" type="radio" value="answer1">
     <label for="answer1">store.questions.answers[0]</label><br>
    <input name="answer2" type="radio" value="answer2">
     <label for="answer2">store.questions.answers[1]</label><br>
    <input name="answer3" type="radio" value="answer3">
     <label for="answer3">store.questions.answers[2]</label><br>
    <input name="answer4" type="radio" value="answer4">
     <label for="answer4">store.questions.answers[3]</label><br>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  </form>
*/

/********** RENDER FUNCTION(S) **********/

function renderProblem() {
  // access data
  const problem = store.problems[store.problemNumber];

  // generate templates
  const choices = createChoicesHtml(problem.answers);

  // display templates
  $('.js-question').text(problem.question);
  $('.js-choices').html(choices);
}


/********** EVENT HANDLER FUNCTION(S) **********/


/********** MAIN **********/
function main() {
  renderProblem();
}

$(main); 

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
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