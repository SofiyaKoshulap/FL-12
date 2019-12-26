let email = prompt('Enter email:');
let minLenght = 5;
let minLenghtPess = 6;
let userEmail = 'user@gmail.com';
let adminEmail = 'admin@gmail.com';
let userPass = 'UserPass';
let adminPass = 'AdminPass';
if (email === '' || email === null){
	alert('Canceled.');
}else if (email.length < minLenght){
	alert('I don\'t know any emails having name length less than 5 symbols');
}else if(email === userEmail || email === adminEmail){
	let password = prompt('Enter pasword:');
	if (password === '' || password === null){
		alert('Canceled.');
	}else if (email===userEmail&&password===userPass||email===adminEmail&&password===adminPass){
		let change = confirm('Do you want to change your password?');
		if(!change){
			alert('You have failed the change.');
		}else{
			let oldPass = prompt('Enter old pasword:');
			if (oldPass === '' || oldPass === null){
				alert('Canceled.');
			}else if (email===userEmail&&oldPass===userPass||email===adminEmail&&oldPass===adminPass){
				let newPassword = prompt('Enter new pasword');
				if(!newPassword|| newPassword === '' || newPassword === null){
					alert('Canceled.');
				}else{
					if (newPassword.length<minLenghtPess ){
						alert('It’s too short password. Sorry.');
					}else{
						let cheking = prompt('Enter new password again:');
						if (cheking === '' || cheking=== null){
							alert('Canceled.');
						}else{
							if (newPassword===cheking) {
								alert('You have successfully changed your password.');
							}else{
								alert('You wrote the wrong password.');
							}
						}
					}
				}
			}else{
				alert('Wrong password');
			}
		}
	}else{
		alert('Wrong password');
	}
}else{
	alert('I don\'t know you');
}
