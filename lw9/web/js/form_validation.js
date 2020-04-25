let button = document.getElementsByClassName('button_send');
button = button[0];
button.onclick = () => {sendForm(); return false;}

async function sendForm() {
	let first_name = document.getElementById('first_name').value;
	let email = document.getElementById('email').value;
	let country = document.getElementById('country').value;
	let message = document.getElementById('message').value;
	let gender = document.getElementsByName('gender');
	for (let i = 0; i < gender.length; i++) {
		if (gender[i].checked) {
			gender = gender[i].value;
		}
	}
	
	let data = {
		first_name: first_name,
		email: email,
		country: country,
		gender: gender,
		message: message
	}
	const link = 'web/form_handler.php';
	let promise = await fetch(link, {
  		method: 'POST',
  		body: JSON.stringify(data),
  		headers: {'Content-Type':'application/json'}
  	})
  	.then((response) => {
    	return response.json();
  	})
  	.then((data) => {
    	arrayData = data;
  	});

  	let commonState = false,
  		stateName = false,
  		stateEmail = false,
  		stateMessage = false;
  	stateName = valueIsCorrect(arrayData, 'first_name');
  	stateEmail = valueIsCorrect(arrayData, 'email');
  	stateMessage = valueIsCorrect(arrayData, 'message');

  	if (stateName && stateEmail && stateMessage) {
  		commonState = true;
  	}

  	visibilityMessage(commonState);
}

function visibilityMessage(commonState) {
	const successfulSending = document.getElementsByClassName('success_send');
	const className = 'visibility_message';

	for (let i = 0; i < successfulSending.length; i++) {
		successfulSending[i].classList.remove(className);

		if (commonState) {
  			successfulSending[i].classList.add(className);
  		}
	}
}

function valueIsCorrect(arrayData, itemName) {
	const className = 'border_color_error';
	
  	if (arrayData[itemName] == 'error') {
  		document.getElementById(itemName).classList.add(className);
  	} else {
  		document.getElementById(itemName).classList.remove(className);
  		return true;
  	}
}