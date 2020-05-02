let button = document.getElementsByClassName('button_send');
button = button[0];
button.onclick = sendForm;

let firstName = document.getElementById('first_name'),
    email = document.getElementById('email'),
    message = document.getElementById('message');
deleteRedBorderOnClick(firstName);
deleteRedBorderOnClick(email);
deleteRedBorderOnClick(message);

function deleteRedBorderOnClick(field) {
    const redBorderClass = 'border_color_error';
    field.onclick = () => field.classList.remove(redBorderClass);
}

async function sendForm() {
    event.preventDefault();
    let data = receivingData();

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
    
    let errorCounter = 0;
    errorCounter =  changeBorderColor(arrayData, errorCounter);
    visibilityMessage(errorCounter);
}

function receivingData() {
    let firstName = document.getElementById('first_name').value;
    let email = document.getElementById('email').value;
    let country = document.getElementById('country').value;
    let message = document.getElementById('message').value;
    let gender = document.getElementsByName('gender');
    
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender = gender[i].value;
        }
    }
    
    data = {
        first_name: firstName,
        email: email,
        country: country,
        gender: gender,
        message: message
    }
    return data;
}

function changeBorderColor(arrayData, errorCounter) {
    const redBorderClass = 'border_color_error'; 

    for (let key in arrayData) {
        if (arrayData[key] == 'error') {
            errorCounter++;   
            document.getElementById(key).classList.add(redBorderClass);
        } else {
            document.getElementById(key).classList.remove(redBorderClass);
        }
    }

    return errorCounter;
}

function visibilityMessage(errorCounter) {
    const successfullSending = document.getElementsByClassName('succesfull_sending');
    const className = 'visibility_message';
    successfullSending[0].classList.remove(className);

    if (errorCounter ==  0) {
        successfullSending[0].classList.add(className);
    }
}