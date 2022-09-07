// Index page

const submitBtn = document.querySelector('#submit')

// When clicking the button check the given information and open the users email filled with these values
submitBtn.addEventListener('click', _ => {
    let emailMsg = document.querySelector('.formmessage').value
    let name = document.querySelector('#inputName').value
    let email = document.querySelector('#inputEmail').value
    let phone = document.querySelector('#inputPhone').value

    if(name.value == '' || email.value == '' || emailMsg == '' || phone.value == ''){
        alert('Please fill the form before sending')
    }
    else {
        window.open(`mailto:saku.karttunen@gmail.com?subject=Contacting from your website
        &body=${emailMsg} --- from: ${name}, ${email}, ${phone}`)
    }
})