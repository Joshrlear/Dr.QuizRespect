'use strict';

let questionNumber = 0;
let score = 0;


// This array stores all question choice/answers
const STORE = [
    {
        question: 'What is the Doc’s real name?',
        choices: [
            'Odell Knight',
            'Herschel &#34Guy&#34 Beahm',
            'Who?',
            'John &#34Gino&#34 Rogers',
        ],
        answer: 'Herschel "Guy" Beahm'
    },
    {
        question:'How tall is the two-time?',
        choices: [
            '5 foot 2 inches',
            'How tall is God?',
            '6 foot 8 inches',
            '5 foot 11 inches',
        ],
        answer: '6 foot 8 inches'
    },
    {
        question:'What is he known for?',
        choices: [
            'Being the old guy in Back To The Future',
            'Trash talking',
            'Putting Baby in the corner',
            "Punching Tom Brady in the face for dissing the Doc's army pants"
        ],
        answer: 'Trash talking'
    },
    {
        question:'Favorite game?',
        choices: [
            'Halo 2',
            'Fortnite',
            'Wheel of Fortune',
            'Apex legends'
        ],
        answer: 'Apex legends'
    },
    {
        question:'How did the doc get his start as the true international gaming superstar?',
        choices: [
            "Don't know...",
            'With a 1993 – 1994 back to back victory at the Blockbuster Video Game World Championships in Ft. Lauderdale, Florida',
            'Dominated the 2006 CPL Winter Counterstrike - Source tournament in Dallas, Texas',
            'Destroyed everyone at The infamous 1997 Red Annihilation "Quake" tournament in Atlanta, Georgia'
        ],
        answer: 'With a 1993 – 1994 back to back victory at the Blockbuster Video Game World Championships in Ft. Lauderdale, Florida'
    },
    {
        question:'Who is the best videogame streamer?',
        choices: [
            'Shroud',
            'The Two-Time',
            'Dr. Phil',
            'Ninja'
        ],
        answer: 'The Two-Time'
    },
    {
        question:"When did Doc's gaming career begin?",
        choices: [
            'At birth',
            'At the top of Mount Fuji, where he mastered the art of Shihai-teki under Jinichi Kawakami, head of Banke Shinobinoden',
            'Shortly after he was bitten by the radioactive spider that gave him his amazing powers to dominate all in the Arena',
            'On Halo 2 in his college dorm'
    ],
        answer: 'On Halo 2 in his college dorm'
    },
    {
        question:'What videogame did Doc help design?',
        choices: [
            'Call of Duty: Advanced Warfare',
            'Super Smash Bros',
            'Titanfall 2',
            'Destiny'
        ],
        answer: 'Call of Duty: Advanced Warfare'
    },
    {
        question:'What is his mustache’s name?',
        choices: [
            'Slick Daddy',
            'The Lip Rug Manometer',
            'what mustache?',
            'Grass Grin Fanny Duster'
        ],
        answer: 'Slick Daddy' || 'The Poisonous Ethiopian Caterpillar'
    },
    {
        question:'What is Doc’s vertical leap?',
        choices: [
            '37&#34',
            '3&#34',
            'As high as he wants',
            "Whatever it is, it's higher than Chuck Norris's"
        ],
        answer: '37"'
    },
]


// This array stores all html for page renders
const storedHtml = {
    startPage: `
<div class="quiz-start">
    <!--<img class="start-img" src="https://yt3.ggpht.com/a-/AAuE7mCC5VvYvvXO49iYxlmrvICF750lSNfbTa3vCQ=s900-mo-c-c0xffffffff-rj-k-no" alt="Painting of Dr. DisRespect's face menacingly looking at you ready for action">-->
    <h1 class="text-center">Dr. QuizRespect</h1>
    <p class="text-center">A Quiz Dedicated To The Two-Time Back To Back
       1993 - 1994 Blockbuster Video-gaming World Champion And
       True International Gaming Superstar, Dr. DisRespect “Doc”</p>
    </div>
</div>
`
,
correctPage: `
<div class="correct-page">
    <img class="correct-answer" src="https://uploads-ssl.webflow.com/5a578ef6046ca900013759b9/5c1d3d249279b339b022ab30_drdisrespect2.png" alt="Champions Club Logo. The Champions Club is a club established by Dr. DisRespect">
    <div class="text-container">
        <h1>Correct</h1>
        <p class="correct-p">Dominate!<br>
        <span class="quoteName-correct-page">- Doc</span>
        </p>
    </div>
</div>
`    
,
wrongPage: `
<div class="wrong-page">
    <img class="wrong-answer" src="https://sirobone.com/wp-content/uploads/2019/02/1550757093_maxresdefault-808x454.jpg" alt="Dr. DisRespect angry, yelling 'DAMN!' while another twitch streamer, shroud laughs">
    <div class="text-container">
        <h1>Wrong</h1>
        <p class="wrong-p">Dominate!<br>
        <span class="quoteName-wrong-page">- Doc</span>
        </p>
    </div>
</div>
`  
,
finishPagePassed: `
<div class="finish-page-container">
    <img class="tenor-gif-embed" src="https://media1.tenor.com/images/5bee43868823cc728479a24c4022e10f/tenor.gif?itemid=12704126" alt="Dr. DisRespect doing his trademark happy dance">
    <h1 class="passed text-center">Passed</h1>
    <p class="text-center">We're at the tippity top of the mountain...
    but we're really only half way up.<br>
    <span class="quoteName">- Doc</span>
    </p>
   </div>
</div>
`
,
finishPageFailed: `
<div class="finish-page-container">
    <img class="tenor-gif-embed" src="https://thumbs.gfycat.com/ExhaustedPastelBubblefish-size_restricted.gif" alt="An angry looking Dr. DisRespect in the trophy room, violently kicking the users screen and breaking it">
    <h1 class="failed text-center">WAKE THE HELL UP!</h1>
    <p class="text-center">get em outta here<br>
    This guy is TERRIBLE!<br>
    <span class="quoteName">- Doc</span>
    </p>
   </div>
</div>
`
}


// html for question pages
function questionPage() {
    return `<h1>Question:</h1>
            <p class="js-question-1">${STORE[questionNumber].question}</p>
                <fieldset>
                    <label class="js-choice">
                    <input type="radio" value="${STORE[questionNumber].choices[0]}" name="choice" required>${STORE[questionNumber].choices[0]}</input>
                    </label>
                    <label class="js-choice">
                    <input type="radio" value="${STORE[questionNumber].choices[1]}" name="choice" required>${STORE[questionNumber].choices[1]}</input>
                    </label>
                    <label class="js-choice">
                    <input type="radio" value="${STORE[questionNumber].choices[2]}" name="choice" required>${STORE[questionNumber].choices[2]}</input>
                    </label>
                    <label class="js-choice">
                    <input type="radio" value="${STORE[questionNumber].choices[3]}" name="choice" required>${STORE[questionNumber].choices[3]}</input>
                    </label>
                </fieldset>`
}

function highlightSelected() {
    $('input').on('click', function() {
        $('input:checked').closest('label').addClass('choice');
        $('input:not(:checked)').closest('label').removeClass('choice');
    })
}

function resetProgress() {
    score = 0;
    questionNumber = 0;
}

function updateQuestionNumber() {
    $('.progress').html(`Your progress: ${questionNumber * 10}%`);
}

function updateScore() {
    $('.js-score-percentage').html(`${score} out of 10 correct`);
}

function loadStartPage() {
    $('.page-loader').html(storedHtml.startPage);
    $('.button').html('Enter The Arena');
    $('.js-score-percentage').html(`0 out of 10 correct`);
    $('.progress').html(`Your progress: 0%`);
}

function loadQuestion() {
    const insertArea = $('.page-loader');
    insertArea.html(questionPage());
    //console.log('Generate HTML successful!');
}

function handleSubmit() {
    // When button clicked referrence answer choice and compare to STORE answer
        //console.log('handling submit');
        event.preventDefault();
        questionNumber++;
        const currentAnswer = STORE[(questionNumber - 1)].answer;
        const choiceValue = $('input:checked').val();
        if (choiceValue === currentAnswer) {
            // display "you got it right!" page
            $('.page-loader').html(storedHtml.correctPage);
            score++;
            updateScore();
        }
        else {
            // display "you got it wrong" page and what the correct answer was
            $('.page-loader').html(`${storedHtml.wrongPage} <div class="correctAnswer">The correct answer was: ${STORE[questionNumber - 1].answer}</div>`);
        }
}

// Determines whether or not user passed or failed. 70% or better is passing
function loadFinishPage() {
    if (score >= 7) {
        $('.page-loader').html(storedHtml.finishPagePassed);
    }
    else {
        $('.page-loader').html(storedHtml.finishPageFailed);
    }
    
}

// reload score question number and the startPage
function resetQuiz() {
    resetProgress();
    loadStartPage();  
}

function handleButton() {
    $('#form').submit(function() {
        event.preventDefault();
        const buttonText =$(this).find('button');
        if (questionNumber === 10) {
            buttonText.data('info', 'retake');
            buttonText.html('Retake Quiz')
            loadFinishPage();
            questionNumber++;
        }
        else if (questionNumber === 11) {
            buttonText.data('info', 'next');
            resetQuiz();
        }
        else if (buttonText.data('info') === 'submit-button') {
            buttonText.data('info', 'next');
            handleSubmit();
            updateQuestionNumber();
            buttonText.html('Next');
        }
        else {
            buttonText.data('info', 'submit-button');
            loadQuestion();
            highlightSelected()
            buttonText.html('Submit');
        }
    })
}

function onLoad() {
    loadStartPage();
    handleButton();
}

$(onLoad);