class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("").attribute("placeholder","Enter your answer")
   //Create a input box to enter the number



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3")
    this.option1 = createElement("h4")
    this.option2 = createElement("h4")
    this.option3 = createElement("h4")
    this.option4 = createElement("h4")




    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.input2.hide()
    this.question.hide()
    this.option1.hide()
    this.option2.hide()
    this.option3.hide()
    this.option4.hide()




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    
    this.input2.position(600,300)
    this.question.position(200, 100)
    this.option1.position(400,150)
    this.option2.position(400,200)
    this.option3.position(400,250)
    this.option4.position(400,300)

    var QUESTION = `What starts with P and ends with E and has 100's of letters in it?`;
    this.question.html(QUESTION)
    var OPTION1 = `1. Pirate`
    this.option1.html(OPTION1)
    var OPTION2 = `2. Pie`
     this.option2.html(OPTION2)
     var OPTION3 = `3. Post Office`
     this.option3.html(OPTION3)
     var OPTION4 = `4. Picture`
     this.option4.html(OPTION4)



    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 300);
    this.button.position(600, 350);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
     this.message.position(100,350)
     var MESSAGE = `Thank You ${this.input1.value()}. The correct answer was post office`
     this.message.html(MESSAGE)
    })


  }
}
