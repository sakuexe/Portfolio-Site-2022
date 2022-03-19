// Index page

var submitBtn = $("#submit");

// When clicking the button check the given information and open the users email filled with these values
submitBtn.click(function(){
    let emailMsg = $(".formmessage")[0].value;

    if($("#inputName")[0].value == "" || $("#inputEmail")[0].value == "" || emailMsg == "" || $("#inputPhone")[0].value == ""){
        alert("Please fill the form before sending")
    }
    else {
        window.open(`mailto:saku.karttunen@gmail.com?subject=Contacting from your website
        &body=${emailMsg} --- from: ${$("#inputName")[0].value}, ${$("#inputEmail")[0].value}, ${$("#inputPhone")[0].value}`);
    }
});