var nameText = document.getElementById('name');
var subject = document.getElementById('subject');
var email = document.getElementById('email');
var message = document.getElementById('message');

document.getElementById("submit-btn").addEventListener("click",function(){  
    if (nameText.value != '' && subject.value != '' && email.value != '' && message.value != ''){
        document.getElementsByClassName("popup")[0].classList.add("active");
    }
});

document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
    setTimeout(() => {
        nameText.value = '';
        subject.value = '';
        email.value = '';
        message.value = '';
    }, 2000);
});