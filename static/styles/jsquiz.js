(function() {
  var questions = [{
    "question": "If someone near you is injured you should",
      "choices": [
        "check that you and the casualty aren't in any danger",
        "dial 999 or 112 for an ambulance when it's safe to do",
        "Leave them for the spectators to watch",
        "Both 1 and 2"
      ],
      "correctAnswer": 4
  }, 
  {
      "number": 2,
      "question": "If a person is unconscious but breathing,you should",
      "choices": [
        "place them in the recovery position until help arrives",
        "Keep them under observation to ensure they continue to breathe normally, and don't obstruct their airway",
        "Obstruct the airway and leave the rest to God",
        "Both 1 and 2"
      ],
      "correctAnswer": 4
    },
   {
      "number": 3,
      "question": "If a person isn't breathing normally after an accident",
      "choices": [
        "Call an ambulance and leave the person to the crowd",
        "call an ambulance and start CPR straight away",
        "Use hands-only CPR if you aren't trained to perform rescue breaths",
        "Both 2 and 3"
      ],
      "correctAnswer": 4
    },
    {
      "number": 4,
      "question": "Postpartum hemorrhage refers to",
      "choices": [
        "Heavy Bleeding after the birth of baby",
        "Heavy Bleeding after abdominal surgery",
        "Heavy Bleeding after brain tumor surgery",
        "None of the above"
      ],
      "correctAnswer": 1
    },
    {
      "number": 5,
      "question": "If a person gets Anaphlysis,you should:",
      "choices": [
        "Call an ambulance immediately if you think someone is experiencing anaphylactic shock.",
        "Check if the person is carrying any adrenaline self-injector",
        "If they're conscious,making them stand is best position",
        "Both 1 and 2"
      ],
      "correctAnswer": 4
    },
    {
      "number": 6,
      "question": "If someone is bleeding heavily,",
      "choices": [
        "Call an ambulance as soon as possible.",
        "Check that there's nothing embedded in the wound",
        "Use a clean dressing to bandage the wound firmly",
        "All of the above"
      ],
      "correctAnswer": 4
    },
    {
      "number": 7,
      "question": "Internal bleeding causes symptoms such as ",
      "choices": [
        "vomiting, stiff neck, balance issues, double vision",
        "Blood in the stool,Rectal bleeding",
        "All of the above",
        "None of the above"
      ],
      "correctAnswer": 3
    },
    {
      "number": 8,
      "question": "Anticoagulation is",
      "choices": [
        "medicines that help prevent blood clots",
        "medicines that facilitate blood clots",
        "medicines that prevents nausea",
        "None of the above"
      ],
      "correctAnswer": 1
    },
    {
      "number": 9,
      "question": "Anticoagulation medications include",
      "choices": [
        "Heparin and Aspirin",
        "Aprotinin and Rivaroxaban",
        "All of the above",
        "None of the above"
      ],
      "correctAnswer": 1
    },
    {
      "number": 10,
      "question": "Causes of Brain Hemorrhage include",
      "choices": [
        "High blood pressure",
        "Drug abuse",
        "Severe trauma",
        "All of the above"
      ],
      "correctAnswer": 4
    },
    {
      "number": 11,
      "question": "If the injury occurs in the area of the back or flank, where the kidney is located",
      "choices": [
        "Hematuria Bleeding Occurs",
        "Retroperitoneal Bleeding Occurs",
        "Pulmonary Hemorrhage Occurs",
        "None of the above"
      ],
      "correctAnswer": 2
    },
    {
      "number": 12,
      "question": "First Aid for Severe Bleeding includes",
      "choices": [
        "Apply continuous firm,direct pressure to wound,using clean cloth or bandage until bleeding stops",
        "Get medical help to cleanse and close the wound",
        "Call local people and handover the victim to them",
        "Both 1 and 2"
      ],
      "correctAnswer": 4
    },
    {
      "number": 13,
      "question": "First Aid for Minor Bleeding includes",
      "choices": [
        "Clean the wound with soap and clean running tap water",
        "Let it bleed and the skin dryness may stop bleeding",
        "Once the bleeding stops, apply antibiotic ointment",
        "Both 1 and 3"
      ],
      "correctAnswer": 4
    },
    {
      "number": 14,
      "question": "First Aid for Nose Bleeding includes",
      "choices": [
        "Sit the person upright and ask them to tilt their head forward",
        "Using the thumb and forefinger, squeeze their nostrils shut",
        "Both 1 and 2",
        "None of the above"
      ],
      "correctAnswer": 3
    },
    {
      "number": 15,
      "question": "First Aid for Internal Bleeding includes",
      "choices": [
        "Check that the person is conscious and make him/her lie down",
        "Cover them with a blanket tokeep them warm and raise the victim’s legs above the level of their heart.",
        "None of the above",
        "All of the above"
      ],
      "correctAnswer": 4
    },
    {
      "number": 16,
      "question": "First Aid for External Bleeding includes",
      "choices": [
        "Apply Pressure to the wound and check circulation below wound",
        "Raise and support the injured part",
        "Both 1 and 2",
        "None of the above"
      ],
      "correctAnswer": 3
    },
    {
      "number": 17,
      "question": "First Aid for Brain Hemorrhage during accidents includes",
      "choices": [
        " keep the injured person lying down and quiet, with the head and shoulders slightly elevated",
        "Call relative of Victim and leave the accident spot",
        "Apply firm pressure to the wound with clean cloth to stop bleeding",
        "Both 1 and 3"
      ],
      "correctAnswer": 4
    },
    {
      "number": 18,
      "question": "Pulmonary Hemorrhage refers to",
      "choices": [
        "Bleeding in Urine",
        "Acute bleeding from the Lung",
        "Bleeding in Brain Tissues",
        "None of the above"
      ],
      "correctAnswer": 2
    },
    {
      "number": 19,
      "question": "Retroperitoneal Bleeding refers to",
      "choices": [
        "Abdominal Cavity Bleeding with anticoagulation.",
        "Bleeding in Brain Tissues",
        "Acute bleeding from the Lung",
        "Bleeding in Urine"
      ],
      "correct_Answer": 1
    },
    {
    "number": 20,
      "question": "Hemorrhage refers to",
      "choices": [
        "Release of blood from a ruptured blood vessel",
        "Hemostasis promoting Agents",
        "Medicines that facilitate blood clots",
        "None of the above"
      ],
      "correctAnswer": 1
    
  }
                   
  ];
  
 
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();
