var inquirer = require('inquirer');

var BasicCard=require("./BasicCard.js");

function clozeCard (text,cloze){
  this.text=text;
  this.cloze=cloze;
  }


var newCloze=new clozeCard();

//Questions for flashcards

var firstPresidentCloze=new clozeCard("George Washington was the first president of the United States","George Washington");
firstPresidentCloze.partial=new clozeCard("...was the first president of the United States.");
firstPresidentCloze.fullText=new clozeCard("George Washington was the first president of the United States.");

var currentPresidentCloze=new clozeCard("Who is the current president of the United States?","Donald Trump");
currentPresidentCloze.partial= new clozeCard("...is the current president of the United States.");
currentPresidentCloze.fullText=new clozeCard("Donald Trump is the current president of the United States.");

var leaderCloze=new clozeCard("Who's the leader of the club that is made for you and me?","Mickey Mouse");
leaderCloze.partial=new clozeCard("...is the leader of the club that is made for you and me.");
leaderCloze.fullText=new clozeCard("Mickey Mouse is the leader of the club that is made for you and me.");

var dinosaurCloze=new clozeCard("Who is the lovable purple dinosaur?","Barney");
dinosaurCloze.partial=new clozeCard("...is the lovable purple dinosaur.");
dinosaurCloze.fullText=new clozeCard("Barney is the lovable purple dinosaur.");

clozeCard.prototype.printCloze=function(){
	console.log(this.text);
    console.log(this.cloze);
};

// Create a "Prompt" with a series of questions.
inquirer.prompt([

   {
    type: "list",
    message: "What kind of card would you like to use?",
    choices: ["Basic","Cloze"],
    name: "card"
  },

  // Here we ask the user to confirm.
  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true

  }

// Once we are done with all the questions... "then" we do stuff with the answers
// In this case, we store all of the answers into a "user" object that inquirer makes for us.
]).then(function(user) {


   // If the user confirms, we displays the user's name and pokemon from the answers.
  if (user.confirm) {

    console.log("==============================================");
    console.log("");
    console.log("Welcome to FLASH CARD MANIA 2017!");
    console.log("");   
    console.log("==============================================");

    if(user.card==="Basic"){
    	console.log("You chose Basic Cards!")
    	console.log("==============================================");
    	console.log("");
    
    	var firstPresident=new BasicCard("Who was the first president of the United States?","George Washington");
  		var currentPresident=new BasicCard("Who is the current president of the United States?","Donald Trump");
  		var leader=new BasicCard("Who's the leader of the club that is made for you and me?","Mickey Mouse");
  		var dinosaur=new BasicCard("Who is the lovable purple dinosaur?","Barney");
          inquirer.prompt([
            {
             name:"question",
             message:"Who was the first president of the United States?",
             name:"answer"
            }
            ]).then(function(answers){
              if(answers.answer===firstPresident.back){
               console.log("That's right! Well Done!");
               console.log("---------------------------------------------------------------------------------------------"); 
              }
              else{
                console.log("");
                console.log("Sorry, that is incorrect...");
                console.log("");
                console.log("The correct answer is: ");
                console.log(firstPresident.back);
                console.log("-----------------------------------------------------------------------------------------------");                
              }
            

            inquirer.prompt([
            {
             name:"question",
             message:"Who is the current president of the United States?",
             name:"answer"
            }
            ]).then(function(answers){
              if(answers.answer===currentPresident.back){
               console.log("That's right! Well Done!");
               console.log("---------------------------------------------------------------------------------------------"); 
              }
              else{
                console.log("");
                console.log("Sorry, that is incorrect...");
                console.log("");
                console.log("The correct answer is: ");
                console.log(currentPresident.back);
                console.log("-----------------------------------------------------------------------------------------------");                
              }
            

            inquirer.prompt([
            {
             name:"question",
             message:"Who's the leader of the club that is made for you and me?",
             name:"answer"
            }
            ]).then(function(answers){
              if(answers.answer===leader.back){
               console.log("That's right! Well Done!");
               console.log("---------------------------------------------------------------------------------------------"); 
              }
              else{
                console.log("");
                console.log("Sorry, that is incorrect...");
                console.log("");
                console.log("The correct answer is: ");
                console.log(leader.back);
                console.log("-----------------------------------------------------------------------------------------------");                
              }
            
            inquirer.prompt([
            {
             name:"question",
             message:"Who is the lovable purple dinosaur?",
             name:"answer"
            }
            ]).then(function(answers){
              if(answers.answer===dinosaur.back){
               console.log("That's right! Well Done!");
               console.log("---------------------------------------------------------------------------------------------"); 
              }
              else{
                console.log("");
                console.log("Sorry, that is incorrect...");
                console.log("");
                console.log("The correct answer is: ");
                console.log(dinosaur.back);
                console.log("-----------------------------------------------------------------------------------------------");                
              }
            })
            })
            })
            })          
       }
    else{
    	console.log("You chose Cloze Cards!")
    	console.log("==============================================");
    	console.log("");

        //Begin 1st question round    
	    	inquirer.prompt([
	    	{
	    	 name:"question",
	    	 message:"...was the first president of the United States.",
	    	 name:"answer"
	    	}
	    	]).then(function(answers){
	    		if(answers.answer=== firstPresidentCloze.cloze){
	    			console.log("That's right! Well Done!");
            console.log("---------------------------------------------------------------------------------------------");
	    		}

	    		else{
	    			console.log("");
	    			console.log("Sorry, that is incorrect...");
	    			console.log("");
	    			console.log("The correct answer is: ");
	    			console.log(firstPresidentCloze.fullText.text)
            console.log("-----------------------------------------------------------------------------------------------");
	    		}//end else 1st question round

        //Begin 2nd question round    
        inquirer.prompt([
        {
         name:"question",
         message:"...is the current president of the United States.",
         name:"answer"
        }
        ]).then(function(answers){
          if(answers.answer=== currentPresidentCloze.cloze){
            console.log("That's right! Well Done!");
            console.log("---------------------------------------------------------------------------------------------");

          }
          else{
            console.log("");
            console.log("Sorry, that is incorrect...");
            console.log("");
            console.log("The correct answer is: ");
            console.log(currentPresidentCloze.fullText.text)
            console.log("----------------------------------------------------------------------------------------------");
          }//end 2nd question round 

        //Begin 3rd question round    
        inquirer.prompt([
        {
         name:"question",
         message:"...is the leader of the club that is made for you and me.",
         name:"answer"
        }
        ]).then(function(answers){
          if(answers.answer=== leaderCloze.cloze){
            console.log("That's right! Well Done!");
            console.log("---------------------------------------------------------------------------------------------");

       }
          else{
            console.log("");
            console.log("Sorry, that is incorrect...");
            console.log("");
            console.log("The correct answer is: ");
            console.log(leaderCloze.fullText.text)
            console.log("---------------------------------------------------------------------------------------------");
          }//end 3rd question round

          //Begin 4th question round    
        inquirer.prompt([
        {
         name:"question",
         message:"...is the lovable purple dinosaur.",
         name:"answer"
        }
        ]).then(function(answers){
          if(answers.answer=== dinosaurCloze.cloze){
            console.log("That's right! Well Done!");
            console.log("---------------------------------------------------------------------------------------------");

       }//end cloze cards
          else{
            console.log("");
            console.log("Sorry, that is incorrect...");
            console.log("");
            console.log("The correct answer is: ");
            console.log(dinosaurCloze.fullText.text)
            console.log("---------------------------------------------------------------------------------------------");
          }//end 4th question round
        });
        });
        });
        });//End Questions
	     } //end Flash cards
      }//End Choice
     

  else {

    console.log("");
    console.log("");
    console.log("That's okay, come again when you can decide.");
    console.log("");
    console.log("");

  }

});


