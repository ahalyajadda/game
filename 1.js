let secretNUmber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
const displayMessage=function(message){
	document.querySelector('.message').textContent=message;
}


document.querySelector('.btncheck').addEventListener('click',function (){
	const guess=Number(document.querySelector('.guess').value)
	console.log(guess,typeof guess);


	  if(!guess){
	  	displayMessage('NO number!') ;
	  }
	  else if(guess==secretNUmber){
	  	
	  	// document.querySelector('.message').textContent=
	  	displayMessage('Correct Number!..');
	  	document.querySelector('.number').textContent=secretNUmber;

	  	document.querySelector('body').style.backgroundColor='green';
	  	//document.querySelector('.number').style.width='100px;'
	  	if(score>highscore){
	  		highscore=score
	  		document.querySelector('.highscore').textContent=score;
	  	}
	  }
	  else if(guess!=secretNUmber){
	  	if(score>1)
	  		 {displayMessage(guess>secretNUmber?'Too High...!':'Too Low...!');// guess>secretNUmber?'Too High...!':'Too Low...!';
	  	score--;
	  	document.querySelector('.score').textContent=score;
			}
		else{
			// document.querySelector('.message').textContent=
			displayMessage("You lost the game...!");
			document.querySelector('.score').textContent=0;
		}
	  	
	  }
	 //  else if(guess>secretNUmber){
	 //  	if(score>1){document.querySelector('.message').textContent='Too High...!';
	 //  	score--;
	 //  	document.querySelector('.score').textContent=score;
		// 	}
		// else{
		// 	document.querySelector('.message').textContent="You lost the game...!"
		// 	document.querySelector('.score').textContent=0;
		// }
	  	
	 //  }
	 //  else if(guess<secretNUmber){
	 //  	if(score>1){document.querySelector('.message').textContent='Too Low...!';
	 //  	score--;
	 //  	document.querySelector('.score').textContent=score;

		// 	}
		// else{
		// 	document.querySelector('.message').textContent="You lost the game...!"
		// 	document.querySelector('.score').textContent=0;
		// }
	  

	 //  }
});
document.querySelector('.btnagain').addEventListener('click',function(){
	score=20;
	secretNUmber=Math.trunc(Math.random()*20)+1;
	displayMessage('start guessing..');
	document.querySelector('.score').textContent=score;
	document.querySelector('.number').textContent='?';
	document.querySelector('.guess').value="";
		document.querySelector('body').style.backgroundColor='black';

})