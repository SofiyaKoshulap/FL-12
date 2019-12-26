let attempt;
let attempts =3;
let possiblePrize = 100;
let userPrize=0;
let prize =100;
let start = confirm('Do you want to play a game?');
let endRandom = 8;
let stepRandom =4;
let stepPrize = 100;
let dividePrize =2;
let startPrize =100;

if (!start) {
	alert('You did not become a billionaire, but can.');
}else{
	attempt=attempts;
	let number = Math.floor(Math.random() *(endRandom+1));
	while(attempt>0){
		let userNumber =+prompt(`Choose a roulette pocket number from 0 to ${endRandom}
Atempts left: ${attempt}
Total prize: ${userPrize}$
Possible prize on curent attempt: ${prize}$ `);
		if (!Number.isInteger(userNumber)){
			alert(`Invalid input data`)
		}else{
			let temp = prize;
			if (userNumber!==number) {
				prize =temp/dividePrize;
				attempt--;
			}else{
				userPrize +=prize;
				start=confirm(`Congratulation, you won!Your prize is: ${userPrize}$. Do you want to continue?`);
				if (start) {
					endRandom+=stepRandom;
					number = Math.floor(Math.random() *(endRandom+1));
					possiblePrize += stepPrize;
					prize =possiblePrize;
					attempt = attempts;
				}else{
					alert(`Thank you for your participation. Your prize is: ${userPrize} $` );
					start = confirm('Do you want play again?');
					if (start) {
						attempt = attempts;
						number = Math.floor(Math.random() *(endRandom+1));
						userPrize=0;
						possiblePrize = startPrize;
						prize =possiblePrize;
					}else {
						break;
					}
				}
			}
			if (attempt===0) {
				alert(`Thank you for your participation. Your prize is: ${userPrize} $` );
				start = confirm('Do you want play again?');
				if (start) {
					attempt = attempts;
					number = Math.floor(Math.random() * (endRandom+1));
					userPrize = 0;
					possiblePrize=startPrize;
					prize=possiblePrize;
				}else{ 
					break;
				}
			}
		}
	}	
}



