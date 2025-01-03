
function openMenu(){
    let elembtnMenu = document.querySelector('.art-menu-bar-btn');
    let elemMenuBar = document.querySelector('.art-menu-bar');
    let activeElements = document.querySelectorAll('.art-active');
    if(activeElements.length > 0){
        for (let i = 0; i < activeElements.length; i++) {
            activeElements[i].classList.remove("art-active");
        }
    }else{
        elembtnMenu.classList.add("art-active");
        elemMenuBar.classList.add("art-active");
    }
}

function sendEmail2() {
    let email = document.getElementById("email").value;
    let file = document.getElementById("file").files[0];
    Email.send({
      SecureToken: "b6cc2000-80d5-4e15-8dea-2b39d8c5d8cb",
      To: email,
      From: "homo8182@gmail.com",
      Subject: "message",
      Body: 'here is your file',
      Attachments: [file],
    }).then(
      message => alert(message)
    );
}

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "eabdennacer219@gmail.com",
        Password : "69C1C1B260EEC8586D13936C177F73DCCCB6",
        To : 'abdennacer1999@gmail.com',
        From : document.getElementById('email').value,
        Subject : "This is the subject",
        Body :  document.getElementById('message').value,
    }).then(
      message => alert(message)
    );


    // Email.send({
    //     SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    //     To : 'them@website.com',
    //     From : "you@isp.com",
    //     Subject : "This is the subject",
    //     Body : "And this is the body"
    // }).then(
    //   message => alert(message)
    // );
}